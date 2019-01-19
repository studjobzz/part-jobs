import {
  UserCommandViewModel,
  UserViewModel,
  LoginUserViewModel
} from "./../../view-models/UserViewModel";
import { JobViewModel } from "src/view-models/job";
import Axios from "axios";
const POST_HEADERS = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

const PUT_HEADERS = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  }
};

export class UserApiService {
  addUser(user: UserViewModel) {
    let header: RequestInit = {
      ...POST_HEADERS,
      body: JSON.stringify(user)
    };
    fetch("/api/User/Register", header);
  }

  logIn(user: LoginUserViewModel): Promise<UserViewModel> {
    let header: RequestInit = {
      ...POST_HEADERS,
      body: JSON.stringify(user)
    };

    return fetch("http://localhost:8000/api/token/", header)
      .then(response => response.json())
      .then(data => data);
  }

  logOut(user: UserViewModel) {
    let header: RequestInit = {
      ...POST_HEADERS,
      body: JSON.stringify(user)
    };
    fetch("/api/User/LogOut", header);
  }
  // return fetch("http://localhost:8000/api/job/list", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => data);
  // }

  loadProfileUser(access: string) {
    return fetch("http://localhost:8000/api/user/profile", {
      // return fetch("http://localhost:8000/api/job/list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + access
      }
    })
      .then(response => response.json())
      .then(data => data);
  }

  // const AuthStr = "Bearer ".concat(access);
  // Axios.get("http://localhost:8000/api/user/profile", {
  //   headers: { Authorization: AuthStr }
  // })
  //   .then(response => {
  //     // If request is good...
  //     debugger;
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.log("error " + error);
  //   });
  // }

  update(user: UserCommandViewModel) {
    let header: RequestInit = {
      ...PUT_HEADERS,
      body: JSON.stringify(user)
    };
    return fetch("/api/User/update", header).then(response => response.status);
  }
}
export default new UserApiService();
