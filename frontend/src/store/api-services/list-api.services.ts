import { ListViewModel } from "../../view-models/list-jobs";
import { JobViewModel } from "../../view-models/job";
import AxiosInstance from "axios";

const DELETE_HEADERS = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json"
  }
};

const POST_HEADERS = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

export class ListsApiService {
  getLists(): Promise<JobViewModel[]> {
    return fetch("http://localhost:8000/api/job/list", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => data);
  }

  getJobById(id: number): Promise<JobViewModel> {
    return fetch("http://localhost:8000/api/job/get/" + id)
      .then(response => response.json())
      .then(data => data);
  }

  addOrUpdateJob(job: JobViewModel): Promise<number> {
    let header: RequestInit = {
      ...POST_HEADERS,
      body: JSON.stringify(job)
    };
    return fetch(
      "http://localhost:8000/api/job/" + job.pk + "update",
      header
    ).then(response => response.json());
  }

  deleteRecipe(recipeId: number): Promise<number> {
    const url = "http://localhost:8000/api/job/Delete";
    let header: RequestInit = {
      ...DELETE_HEADERS,
      body: JSON.stringify(recipeId)
    };
    return fetch(url, header).then(response => response.status);
  }
}

export default new ListsApiService();
