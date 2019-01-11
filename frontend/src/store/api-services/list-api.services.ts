import { ListViewModel } from "../../view-models/list-jobs";
import { JobViewModel } from "../../view-models/job";

export class ListsApiService {
  getLists(): Promise<JobViewModel[]> {
    return fetch("http://localhost:8000/api/job/get", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => data);
  }
}

export default new ListsApiService();
