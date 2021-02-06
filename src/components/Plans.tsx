import { Button } from "@material-ui/core";
import { loadStripe } from "@stripe/stripe-js";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { db } from "../firebase";
import styles from "../styles/Plans.module.css";

export const Plans: React.FC = () => {
  const [products, setProducts] = useState<object>([]);
  const [subscription, setSubscription] = useState<{
    role: string;
    current_period_end: number;
    current_period_start: number;
  } | null>(null);

  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("customers")
      .doc(user?.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start: subscription.data().current_period_start
              .seconds,
          });
        });
      });
  }, [user?.uid]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async (priceId: string) => {
    const docRef = await db
      .collection("customers")
      .doc(user?.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      //@ts-ignore
      const { error, sessionId } = snap.data();

      if (error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        // We have a session, let's redirect to Checkout
        // Init Stripe
        const stripe = await loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY!);
        stripe?.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className={styles.plans}>
      <br />
      {subscription && (
        <p>
          Renewal date:{" "}
          {new Date(
            subscription.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}

      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);

        return (
          <div
            key={productId}
            className={clsx(styles.plan, {
              [styles.disabled]: isCurrentPackage,
            })}
          >
            <div className={styles.info}>
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            {!isCurrentPackage ? (
              <Button onClick={() => loadCheckout(productData.prices.priceId)}>
                Subscribe
              </Button>
            ) : (
              <Button disabled> Current Package</Button>
            )}
          </div>
        );
      })}
    </div>
  );
};
