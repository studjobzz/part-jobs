import ListsStoreInstace, { ListsStore } from "./lists-store";
import UserStoreInstance, { UserStore } from "./UserStore";

export class RootStore {
  listsStore: ListsStore;
  userStore: UserStore;

  constructor() {
    this.listsStore = ListsStoreInstace;
    this.userStore = UserStoreInstance;
  }
}

export default new RootStore();
