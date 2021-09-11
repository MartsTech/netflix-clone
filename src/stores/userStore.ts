import { auth } from "config/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User as FirebaseUser,
} from "firebase/auth";
import { makeAutoObservable, reaction } from "mobx";
import { toast } from "react-toastify";
import { User } from "types/user";
import { resetStore, store } from "./store";

class UserStore {
  user: User | null = null;
  loading: boolean = true;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.user,
      (user) => {
        if (
          user &&
          typeof store.paymentStore.currentSubscription === "undefined"
        ) {
          store.paymentStore.getCurrentSubscription();
        }
      }
    );
  }

  reset = () => {
    this.user = null;
    this.loading = true;
  };

  signInEmail = (email: string, password: string) => {
    this.loading = true;

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        this.setUser(user);
      })
      .catch((error) => {
        toast.error(error.message);
      });

    this.loading = false;
  };

  signUpEmail = (email: string, password: string) => {
    this.loading = true;

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        this.setUser(user);
      })
      .catch((error) => {
        toast.error(error.message);
      });

    this.loading = false;
  };

  signInProvider = () => {
    this.loading = true;

    signInWithPopup(auth, new GoogleAuthProvider())
      .then(({ user }) => {
        this.setUser(user);
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

  setUser = (user: FirebaseUser | null) => {
    if (user) {
      this.user = {
        uid: user.uid,
        email: user.email!,
        photoURL: user.photoURL,
      };
    } else {
      this.user = null;
    }

    this.loading = false;
  };
}

export default UserStore;
