import { observable, computed, action } from "mobx";
import { ListViewModel } from "../view-models/list-jobs";
import ListsApiInstance, {
  ListsApiService
} from "./api-services/list-api.services";

export class ListsStore {
  private listsApi: ListsApiService;
  @observable
  lists: ListViewModel;
  @observable
  activeList: ListViewModel = new ListViewModel({
    id: 1,
    name: "first",
    description: "easy",
    jobs: [
      { id: 1, name: "Software developer", description: "ASP.net" },
      { id: 2, name: "Q&A", description: "Normal" },
      { id: 3, name: "Inginer Constructii", description: "Blocuri" },
      { id: 4, name: "Zara coach", description: "Suits" },
      { id: 5, name: "Q&A", description: "Normal" },
      { id: 6, name: "Laptop", description: "Husa" },
      { id: 7, name: "Software", description: "Phyton" },
      { id: 8, name: "George", description: "Boss" },
      { id: 9, name: "Ionut", description: "Jmeck" }
    ]
  });

  constructor(listsApi: ListsApiService) {
    this.listsApi = listsApi;
    this.activeList = {
      id: 1,
      name: "first",
      description: "easy",
      jobs: [
        { id: 1, name: "Software developer", description: "ASP.net" },
        { id: 2, name: "Q&A", description: "Normal" },
        { id: 3, name: "Inginer Constructii", description: "Blocuri" },
        { id: 4, name: "Zara coach", description: "Suits" },
        { id: 5, name: "Q&A", description: "Normal" },
        { id: 6, name: "Laptop", description: "Husa" },
        { id: 7, name: "Software", description: "Phyton" },
        { id: 8, name: "George", description: "Boss" },
        { id: 9, name: "Ionut", description: "Jmeck" }
      ]
    };
  }

  @action
  loadList(callback?: Function) {
    debugger;
    // this.listsApi
    //   .getLists()
    //   .then(data => (this.lists = new ListViewModel(data)))
    //   .then(() => {
    //     if (callback != undefined) {
    //       callback();
    //     }
    //   });
  }

  @computed
  get getList(): ListViewModel {
    return this.activeList;
  }
}

export default new ListsStore(ListsApiInstance);
