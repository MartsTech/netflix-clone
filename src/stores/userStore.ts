import { auth, db, provider } from "config/firebase";
import firebase from "firebase/app";
import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { User } from "types/user";
import { resetStore } from "./store";

class UserStore {
  user: User | null = null;
  loading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.user = null;
    this.loading = true;
  };

  signIn = () => {
    this.loading = true;

    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        if (user) {
          runInAction(() => {
            this.user = {
              uid: user.uid,
              email: user.email!,
              photoURL: user.photoURL!,
            };
          });

          db.collection("users").doc(user.uid).set(
            {
              email: user.email,
              photoURL: user.photoURL,
              lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
            },
            { merge: true }
          );
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });

    this.loading = false;
  };

  signOut = () => {
    auth.signOut();
    resetStore();
  };

  setUser = (user: User | null) => {
    this.user = user;
    this.loading = false;
  };
}

export default UserStore;
