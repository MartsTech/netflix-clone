import { auth, provider } from "config/firebase";
import { makeAutoObservable, reaction, runInAction } from "mobx";
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

    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        if (user) {
          runInAction(() => {
            this.user = {
              uid: user.uid,
              email: user.email!,
              photoURL: user.photoURL,
            };
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });

    this.loading = false;
  };

  signUpEmail = (email: string, password: string) => {
    this.loading = true;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        if (user) {
          runInAction(() => {
            this.user = {
              uid: user.uid,
              email: user.email!,
              photoURL: user.photoURL,
            };
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });

    this.loading = false;
  };

  signInProvider = () => {
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
