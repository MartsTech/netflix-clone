import { loadStripe, Stripe } from "@stripe/stripe-js";
import { db } from "config/firebase";
import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { PriceData, Product } from "types/product";
import { Subscription } from "types/subscription";
import { store } from "./store";

class PaymentStore {
  productRegistry = new Map<string, Product>();
  stripe: Stripe | null = null;
  currentSubscription?: Subscription | null;
  unsubscribeCurrentSubscription?: () => void;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.productRegistry.clear();
    this.stripe = null;
    this.currentSubscription = undefined;

    if (this.unsubscribeCurrentSubscription) {
      this.unsubscribeCurrentSubscription();
      this.unsubscribeCurrentSubscription = undefined;
    }
  };

  get products() {
    return Array.from(this.productRegistry.values());
  }

  loadProducts = async () => {
    if (this.productRegistry.size !== 0) {
      return;
    }

    const productsSnapshot = await db
      .collection("products")
      .where("active", "==", true)
      .get();

    productsSnapshot.forEach(async (doc) => {
      const product = doc.data() as Product;
      const priceSnapshot = await doc.ref.collection("prices").get();

      priceSnapshot.docs.forEach((price) => {
        product.prices = {
          priceId: price.id,
          priceData: price.data() as PriceData,
        };
      });

      runInAction(() => {
        this.productRegistry.set(doc.id, product);
      });
    });
  };

  createCheckout = async (priceId: string) => {
    if (!this.stripe) {
      this.stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    }

    const { user } = store.userStore;

    if (!user) {
      toast.error("An error occurred. Please try again.");
      return;
    }

    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snapshot) => {
      const { error, sessionId } = snapshot.data() as any;

      if (error) {
        toast.error(error.message);
      }
      if (sessionId) {
        this.stripe?.redirectToCheckout({ sessionId });
      }
    });
  };

  getCurrentSubscription = () => {
    const { user } = store.userStore;

    if (!user) {
      toast.error("An error occurred. Please try again.");
      return;
    }

    this.unsubscribeCurrentSubscription = db
      .collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .onSnapshot(async (snapshot) => {
        const doc = snapshot.docs[0];

        if (doc) {
          this.currentSubscription = doc.data() as Subscription;
        } else {
          this.currentSubscription = null;
        }
      });
  };
}

export default PaymentStore;
