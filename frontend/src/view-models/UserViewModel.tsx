import { observable, action } from "mobx";

export class LoginUserViewModel {
  @observable
  public username: string;
  @observable
  public password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export class UserViewModel {
  @observable
  public id: number;
  @observable
  public username: string;
  @observable
  public first_name: string;
  @observable
  public last_name: string;
  @observable
  public email: string;
  @observable
  public password: string;
  @observable
  public access: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    access: string
  ) {
    this.first_name = firstName;
    this.last_name = lastName;
    this.email = email;
    this.password = password;
    this.access = access;
  }
}

export class UserCommandViewModel {
  @observable
  public id: number;
  @observable
  public first_name: string;
  @observable
  public last_name: string;
  @observable
  public username: string;
  @observable
  public email: string;
  @observable
  public oldPassword: string;
  @observable
  public newPassword: string;
  @observable
  public repeatPassword: string;

  constructor(user: any) {
    this.id = user.id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.oldPassword = user.oldPassword;
    this.newPassword = user.newPassword;
    this.repeatPassword = user.repeatPassword;
  }
}
