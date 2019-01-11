import { observable } from "mobx";
import { JobViewModel } from "./job";

export class ListViewModel {
  @observable
  public jobs: JobViewModel[];

  constructor(list: any) {
    this.jobs = list.jobs;
  }
}
