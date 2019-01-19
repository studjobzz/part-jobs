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
  @observable
  public profileImage: string;
  @observable
  public phone: number;
  @observable
  public about: string;
  @observable
  public adress: string;
  @observable
  public birthday: Date;
  @observable
  public CV: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    access: string,
    profileImage: string,
    phone: number
  ) {
    this.first_name = firstName;
    this.last_name = lastName;
    this.email = email;
    this.password = password;
    this.access = access;
    this.profileImage = profileImage;
    this.phone = phone;
  }
}

export class UserCommandViewModel {
  @observable
  public pk: number;
  @observable
  public birthday: string;
  @observable
  public user: string;
  @observable
  public sex: string;
  @observable
  public address: string;
  @observable
  public status: string;
  @observable
  public phone_number: string;
  @observable
  public description: string;
  @observable
  public image: string;
  @observable
  public user_cv: string;

  constructor(user: any) {
    this.pk = user.pk;
    this.birthday = user.birthday;
    this.user = user.user;
    this.sex = user.sex;
    this.address = user.address;
    this.status = user.status;
    this.phone_number = user.phone_number;
    this.description = user.description;
    this.image = user.image;
    this.user_cv = user.user_cv;
  }
}
