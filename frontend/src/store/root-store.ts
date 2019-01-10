import ListsStoreInstace, { ListsStore } from "./lists-store";
import UserStoreInstance, { UserStore } from "./UserStore";
import ViewStoreInstance, { ViewStore } from "./view-store";

export class RootStore {
  listsStore: ListsStore;
  userStore: UserStore;
  viewStore: ViewStore;

  constructor() {
    this.listsStore = ListsStoreInstace;
    this.userStore = UserStoreInstance;
    this.viewStore = ViewStoreInstance;
  }
}

export default new RootStore();
