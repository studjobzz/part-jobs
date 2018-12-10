import { observable, computed, action } from "mobx";
import { ListViewModel } from "../view-models/list-jobs";
import ListsApiInstance, {
  ListsApiService
} from "./api-services/list-api.services";

export class ListsStore {
  private listsApi: ListsApiService;
  @observable
  lists: ListViewModel[] = [];
  @observable
  activeList: ListViewModel;

  constructor(listsApi: ListsApiService) {
    this.listsApi = listsApi;
    this.activeList = {
      id: 0,
      name: "",
      description: "",
      jobs: []
    };
  }

  @action
  loadLists(callback?: Function) {
    debugger;
    this.listsApi
      .getLists()
      .then(data => (this.lists = data.map(list => new ListViewModel(list))))
      .then(() => {
        if (callback != undefined) {
          callback();
        }
      });
  }

  @computed
  get getLists(): ListViewModel[] {
    return this.lists;
  }
}

export default new ListsStore(ListsApiInstance);
