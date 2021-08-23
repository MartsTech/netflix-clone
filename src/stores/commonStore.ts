import { makeAutoObservable } from "mobx";

class CommonStore {
  modalOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.modalOpen = false;
  };

  setModalOpen = (state: boolean) => {
    this.modalOpen = state;
  };
}

export default CommonStore;
