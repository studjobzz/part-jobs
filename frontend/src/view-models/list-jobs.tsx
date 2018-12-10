import { observable } from "mobx";
import { JobViewModel } from "./job";

export class ListViewModel {
  @observable
  public id: number;
  @observable
  public name: string;
  @observable
  public description: string;
  @observable
  public jobs: JobViewModel[];

  constructor(list: any) {
    this.id = list.id;
    this.name = list.name;
    this.description = list.description;
    this.jobs = list.jobs;
  }
}
