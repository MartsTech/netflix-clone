import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import MovieStore from "./movieStore";
import UserStore from "./userStore";

interface Store {
  commonStore: CommonStore;
  userStore: UserStore;
  movieStore: MovieStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  movieStore: new MovieStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};

export const resetStore = () => {
  const { commonStore, userStore, movieStore } = store;
  commonStore.reset();
  userStore.reset();
  movieStore.reset();
};
