import {
  UserCommandViewModel,
  UserViewModel,
  LoginUserViewModel
} from "./../../view-models/UserViewModel";

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

  update(user: UserCommandViewModel) {
    let header: RequestInit = {
      ...PUT_HEADERS,
      body: JSON.stringify(user)
    };
    return fetch("/api/User/update", header).then(response => response.status);
  }
}
export default new UserApiService();
