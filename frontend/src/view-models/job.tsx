import { observable } from "mobx";

export class JobViewModel {
  @observable
  public id: number;
  @observable
  public name: string;
  @observable
  public description: string;

  constructor(item: any) {
    this.id = item.id;
    this.name = item.name;
    this.description = item.description;
  }
}
