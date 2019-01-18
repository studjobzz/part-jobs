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
  @observable
  activeJob: JobViewModel;
  @observable
  statusCode: number;

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

  addOrUpdateJob(job: JobViewModel, callback?: Function) {
    this.listsApi
      .addOrUpdateJob(job)
      .then(statusCode => (this.statusCode = statusCode))
      .then(() => {
        if (callback != undefined) {
          callback();
        }
      });
  }

  @action
  loadActiveJob(id: number, loadedJobCallback: Function) {
    this.listsApi.getJobById(id).then(data => {
      this.activeJob = data;
      loadedJobCallback(data);
    });
  }

  @computed
  get getFavourites(): JobViewModel[] {
    return this.activeList.filter(job => job.favourite);
  }

  @computed
  get getList(): JobViewModel[] {
    return this.activeList;
  }
}

export default new ListsStore(ListsApiInstance);
