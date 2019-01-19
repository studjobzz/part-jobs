import { observable } from "mobx";

export class JobViewModel {
  @observable
  public pk: number;
  @observable
  public title: string;
  @observable
  public description: string;
  @observable
  public image: string;
  @observable
  public validated: boolean;
  @observable
  public idUser: number;
  @observable
  public listaAplicanti: number[];

  constructor(item: any) {
    this.pk = item.pk;
    this.title = item.title;
    this.description = item.description;
    this.image = item.image;
    this.validated = item.validated;
    this.idUser = item.idUser;
    this.listaAplicanti = item.listaAplicanti;
  }
}

export class JobInputModel {
  @observable
  public title: string;
  @observable
  public description: string;
  @observable
  public image: File;
  @observable
  public validated: boolean;
  @observable
  public user: string;

  constructor(item: any) {
    this.title = item.title;
    this.description = item.description;
    this.image = item.image;
    this.validated = item.validated;
    this.user = item.user;
  }
}
