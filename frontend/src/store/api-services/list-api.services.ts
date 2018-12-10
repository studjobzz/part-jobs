import { ListViewModel } from "../../view-models/list-jobs";

export class ListsApiService {
  getLists(): Promise<ListViewModel[]> {
    return fetch("http://localhost:55096/api/List/GetAll")
      .then(response => response.json())
      .then(data => data);
  }
}

export default new ListsApiService();
