import ListsStoreInstace, { ListsStore } from "./lists-store";

export class RootStore {
  listsStore: ListsStore;

  constructor() {
    this.listsStore = ListsStoreInstace;
  }
}

export default new RootStore();
