import { auth, provider } from "config/firebase";
import { makeAutoObservable, reaction, runInAction } from "mobx";
import { toast } from "react-toastify";
import { User, UserRole } from "types/user";
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

  getUserRole = async () => {
    if (!auth.currentUser) {
      toast.error("An Error Occurred. Please try again.");
      return null;
    }
    await auth.currentUser.getIdToken(true);
    const decodedToken = await auth.currentUser.getIdTokenResult();
    const role = decodedToken.claims.stripeRole;

    if (role === "basic" || "standard" || "premium") {
      return role as UserRole;
    }

    return null;
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
