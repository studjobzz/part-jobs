import { observable, computed, action, toJS } from "mobx";
import { ListViewModel } from "../view-models/list-jobs";
import { JobViewModel, JobInputModel } from "../view-models/job";
import ListsApiInstance, {
  ListsApiService
} from "./api-services/list-api.services";
import { UserCommandViewModel } from "src/view-models/UserViewModel";

export class ListsStore {
  private listsApi: ListsApiService;
  @observable
  lists: ListViewModel;
  @observable
  activeList: JobViewModel[];
  @observable
  favoritesList: JobViewModel[];
  @observable
  profileUser: UserCommandViewModel[];
  @observable
  activeJob: JobViewModel;

  initialActiveJob: JobViewModel = {
    pk: 0,
    title: "",
    description: "",
    image: "",
    validated: false,
    idUser: 0,
    listaAplicanti: []
  };
  @observable
  statusCode: number;

  constructor(listsApi: ListsApiService) {
    this.listsApi = listsApi;
    this.activeList = [];
    this.favoritesList = [];
    this.profileUser = [];
    this.activeJob = this.initialActiveJob;
  }

  @action
  loadUserProfile(access: string, loadedUserCallback?: Function) {
    debugger;
    this.listsApi
      .loadProfileUser(access)
      .then(data => {
        debugger;
        console.log("tata");
        // this.profileUser = data;
      })
      .then(() => {
        if (loadedUserCallback != undefined) {
          loadedUserCallback();
        }
      });
  }

  @action
  loadList(callback?: Function) {
    this.listsApi
      .getLists()
      .then(data => {
        this.activeList = data;
        this.favoritesList.map(job => this.activeList.push(job));
      })
      .then(() => {
        if (callback != undefined) {
          callback();
        }
      });
  }

  @action
  loadFavorites(callback?: Function) {
    this.listsApi
      .getFavorites()
      .then(data => (this.favoritesList = data))
      .then(() => {
        if (callback != undefined) {
          callback();
        }
      });
  }

  addOrUpdateJob(job: JobInputModel, access: string) {
    this.listsApi
      .addOrUpdateJob(job, access)
      .then(statusCode => (this.statusCode = statusCode));
    // .then(() => {
    //   if (callback != undefined) {
    //     callback();
    //   }
    // });
  }

  @action
  loadActiveJob(id: number, loadedJobCallback: Function) {
    var self = this;
    this.listsApi.getLists().then(data => {
      data.map(element => {
        if (element.pk == id) {
          self.activeJob = element;
          return;
        }
      });
      loadedJobCallback(self.activeJob);
    });
  }

  @computed
  get getFavourites(): JobViewModel[] {
    return this.favoritesList;
  }

  @computed
  get getList(): JobViewModel[] {
    return this.activeList;
  }
}

export default new ListsStore(ListsApiInstance);
