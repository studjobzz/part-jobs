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
  public favorite: boolean;
  @observable
  public idUser: number;
  @observable
  public listaAplicanti: number[];

  constructor(item: any) {
    this.pk = item.pk;
    this.title = item.title;
    this.description = item.description;
    this.image = item.image;
    this.favorite = item.favorite;
    this.idUser = item.idUser;
    this.listaAplicanti = item.listaAplicanti;
  }
}
