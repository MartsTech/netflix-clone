import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import MovieStore from "./movieStore";
import PaymentStore from "./payment";
import UserStore from "./userStore";

interface Store {
  commonStore: CommonStore;
  userStore: UserStore;
  movieStore: MovieStore;
  paymentStore: PaymentStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  movieStore: new MovieStore(),
  paymentStore: new PaymentStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);

export const resetStore = () => {
  const { commonStore, userStore, movieStore, paymentStore } = store;
  commonStore.reset();
  userStore.reset();
  movieStore.reset();
  paymentStore.reset();
};
