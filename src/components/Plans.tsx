import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "src/features/userSlice";
import { db } from "../firebase";
import styles from "../styles/Plans.module.css";
// import { loadStripe } from "@stripe/stripe-js";

export const Plans: React.FC = () => {
  const [products, setProducts] = useState<object>([]);

  const user = useSelector(selectUser);

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
        // const stripe = await loadStripe('');
      }
    });
  };

  return (
    <div className={styles.plans}>
      {Object.entries(products).map(([productId, productData]) => {
        //TODO
        return (
          <div className={styles.plan} key={productId}>
            <div className={styles.info}>
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <Button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </Button>
          </div>
        );
      })}
    </div>
  );
};
