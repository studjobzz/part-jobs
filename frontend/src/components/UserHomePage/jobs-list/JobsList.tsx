import * as React from "react";
import { inject, observer } from "mobx-react";
import { ListsStore } from "../../../store/lists-store";
import { ViewStore } from "../../../store/view-store";
import { HeaderTabs } from "../../../view-models/header-tabs";
import { JobListFilters } from "../shared-components/job-list-filters/JobListFilters";
import "../../../shared/list-all.css";
import { JobListView } from "../shared-components/job-list-view/JobListView";
import { JobViewModel } from "../../../view-models/job";
import { Redirect } from "react-router-dom";

interface Props {
  listsStore: ListsStore;
  viewStore: ViewStore;
  handleRecipeDetails: Function;
}

interface State {
  jobsToOmit: number[];
  jobs: JobViewModel[];
  redirectTo: string;
  dataWasReceived: boolean;
  filter: {
    difficulty: string;
    category: string;
  };
}

const initialState: State = {
  jobsToOmit: [],
  jobs: [],
  redirectTo: "",
  dataWasReceived: false,
  filter: { difficulty: "", category: "" }
};

@inject("listsStore")
@inject("viewStore")
@observer
export class JobsList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
    this.props.listsStore.loadList(() =>
      this.setState({
        jobs: this.props.listsStore.activeList,
        dataWasReceived: true
      })
    );
  }
  newListOfRecipes: JobViewModel[] = [];

  componentWillMount() {
    this.props.viewStore.changeActiveHeaderTab(HeaderTabs.userHome);
  }

  handleJobsToOmit(jobsToOmit: number[]) {
    this.setState({ jobsToOmit: jobsToOmit });
  }

  // handleClick(recipe: RecipeViewModel) {
  //   this.setState({ redirectTo: "/recipes/edit/" + recipe.id });
  // }

  handleRedirect(): React.ReactNode {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    }

    return null;
  }

  // handleSetFavorites(recipe: RecipeCommandViewModel) {
  //   this.props.recipesStore.AddOrUpdateRecipe(recipe, recipe.recipesMedia);
  // }

  private handleFilterByCategory(category: string) {
    this.setState({
      filter: { difficulty: this.state.filter.difficulty, category: category }
    });
  }

  private handleFilterByDifficulty(difficulty: string) {
    this.setState({
      filter: { difficulty: difficulty, category: this.state.filter.category }
    });
  }

  private filterByDifficulty(jobs: JobViewModel[]): JobViewModel[] {
    if (this.state.filter.difficulty) {
      return jobs.filter(
        job => job.description == this.state.filter.difficulty
      );
    }
    return jobs;
  }

  private filterByCategory(jobs: JobViewModel[]): JobViewModel[] {
    if (this.state.filter.category) {
      return jobs.filter(job => {
        var categoryIsFound = false;
        if (job.title == this.state.filter.category) {
          categoryIsFound = true;
        }
        return categoryIsFound;
      });
    }
    return jobs;
  }

  getRecipiesItems(): JobViewModel[] {
    let result = this.props.listsStore.activeList;
    result = this.filterByCategory(this.filterByDifficulty(result));
    return result;
  }

  render(): React.ReactNode {
    console.log(this.props);
    return (
      this.handleRedirect() || (
        <div className="list-all">
          <JobListFilters
            jobs={this.props.listsStore.activeList}
            handleSearchDifficulty={this.handleFilterByDifficulty.bind(this)}
            handleFilterByCategory={this.handleFilterByCategory.bind(this)}
            handleJobsToOmit={this.handleJobsToOmit.bind(this)}
          />
          <JobListView
            jobs={this.getRecipiesItems.bind(this)()}
            jobsToOmit={this.state.jobsToOmit}
            // handleSetFavorites={this.handleSetFavorites.bind(this)}
            waitingForData={!this.state.dataWasReceived}
          />
        </div>
      )
    );
  }
}
