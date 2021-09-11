import { loadStripe, Stripe } from "@stripe/stripe-js";
import { db } from "config/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { PriceData, Product } from "types/product";
import { Subscription } from "types/subscription";
import { store } from "./store";

class PaymentStore {
  productRegistry = new Map<string, Product>();
  stripe: Stripe | null = null;
  loading = true;
  currentSubscription?: Subscription | null;
  unsubscribeCurrentSubscription?: () => void;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.productRegistry.clear();
    this.stripe = null;
    this.loading = true;
    this.currentSubscription = undefined;

    if (this.unsubscribeCurrentSubscription) {
      this.unsubscribeCurrentSubscription();
    }
    this.unsubscribeCurrentSubscription = undefined;
  };

  get products() {
    return Array.from(this.productRegistry.values());
  }

  loadProducts = async () => {
    if (this.productRegistry.size !== 0) {
      return;
    }

    const productsQuery = query(
      collection(db, "products"),
      where("active", "==", true)
    );
    const productsSnapshot = await getDocs(productsQuery);

    productsSnapshot.forEach(async (doc) => {
      const product = doc.data() as Product;

      const priceRef = collection(doc.ref, "prices");
      const priceSnapshot = await getDocs(priceRef);

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
    if (this.loading) {
      toast.error("Please wait. The session is loading.");
      return;
    }

    const { user } = store.userStore;

    if (!user) {
      toast.error("An error occurred. Please try again.");
      return;
    }

    this.loading = true;

    if (!this.stripe) {
      this.stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    }

    const customerRef = doc(db, "customers", user.uid);
    const sessionsRef = collection(customerRef, "checkout_sessions");

    const newSessionRef = await addDoc(sessionsRef, {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    onSnapshot(newSessionRef, async (snapshot) => {
      const { error, sessionId } = snapshot.data() as any;

      if (error) {
        toast.error(error.message);
      }
      if (sessionId) {
        this.stripe?.redirectToCheckout({ sessionId });
      }
    });

    runInAction(() => {
      this.loading = false;
    });
  };

  getCurrentSubscription = () => {
    const { user } = store.userStore;

    if (!user) {
      toast.error("An error occurred. Please try again.");
      return;
    }

    const customerRef = doc(db, "customers", user.uid);
    const subscriptionsRef = collection(customerRef, "subscriptions");

    onSnapshot(subscriptionsRef, async (snapshot) => {
      snapshot.docs.forEach((doc) => {
        runInAction(() => {
          if (doc) {
            this.currentSubscription = {
              role: doc.data().role,
              current_period_start: this.formatPeriod(
                doc.data().current_period_start.seconds
              ),
              current_period_end: this.formatPeriod(
                doc.data().current_period_end.seconds
              ),
            };
          } else {
            this.currentSubscription = null;
          }
        });
      });
      runInAction(() => {
        this.loading = false;
      });
    });
  };

  private formatPeriod = (seconds: number) =>
    new Date(seconds * 1000).toLocaleDateString();
}

export default PaymentStore;
