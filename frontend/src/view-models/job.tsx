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
  public favourite: boolean;

  constructor(item: any) {
    this.pk = item.pk;
    this.title = item.title;
    this.description = item.description;
    this.image = item.image;
    this.favourite = item.favourite;
  }
}
