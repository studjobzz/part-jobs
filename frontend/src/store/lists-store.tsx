import { observable, computed, action } from "mobx";
import { ListViewModel } from "../view-models/list-jobs";
import { JobViewModel } from "../view-models/job";
import ListsApiInstance, {
  ListsApiService
} from "./api-services/list-api.services";

export class ListsStore {
  private listsApi: ListsApiService;
  @observable
  lists: ListViewModel;
  @observable
  activeList: JobViewModel[];

  constructor(listsApi: ListsApiService) {
    this.listsApi = listsApi;
    this.activeList = [];
  }

  @action
  loadList(callback?: Function) {
    this.listsApi
      .getLists()
      .then(data => (this.activeList = data))
      .then(() => {
        if (callback != undefined) {
          callback();
        }
      });
  }

  @computed
  get getList(): JobViewModel[] {
    return this.activeList;
  }
}

export default new ListsStore(ListsApiInstance);
