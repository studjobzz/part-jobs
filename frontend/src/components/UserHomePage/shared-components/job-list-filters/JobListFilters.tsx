import * as React from "react";
import { inject, observer } from "mobx-react";
import "../../../../shared/list-all.css";
import { SearchInput } from "../../SearchInput";
import { JobViewModel } from "src/view-models/job";

interface Props {
  jobs: JobViewModel[];
  handleJobsToOmit: Function;
  handleSearchDifficulty: Function;
  handleFilterByCategory: Function;
}

interface State {
  jobsIdOmitFilter: number[];
}

const initialState: State = {
  jobsIdOmitFilter: []
};

@observer
export class JobListFilters extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  private handleFilterByDifficulty(e: any) {
    this.props.handleSearchDifficulty(e.target.value);
  }

  private handleFilterByCategory(e: any) {
    this.props.handleFilterByCategory(e.target.value);
  }

  private handleSearchKeyword(searchString: string) {
    debugger;
    this.searchThroughRecipes(searchString);
  }

  private searchThroughRecipes(name: string) {
    let jobsIdOmitFilter: number[] = [];
    this.props.jobs.forEach(job => {
      if (!job.title.toLowerCase().includes(name.toLowerCase())) {
        jobsIdOmitFilter.push(job.pk);
      }
    });
    this.setState({ jobsIdOmitFilter: jobsIdOmitFilter });
    this.props.handleJobsToOmit(jobsIdOmitFilter);
  }

  render() {
    return (
      <React.Fragment>
        <div className="bp3-inline filter-fields">
          <SearchInput
            onSearch={this.handleSearchKeyword.bind(this)}
            // searchWhileTyping={true}
          />
          <select
            className="selects select_search filter-common"
            onChange={this.handleFilterByCategory.bind(this)}
          >
            <option value="" selected>
              All Categories
            </option>
            <option value="soup">Soup</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="appetizer">Appetizer</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="breakfast">Breakfast</option>
            <option value="yummy">Yummy</option>
            <option value="pizza">Pizza</option>
            <option value="dessert">Dessert</option>
            <option value="drink">Drink</option>
          </select>
          {/* <select
            className="selects select_search filter-common"
            onChange={this.handleFilterByDifficulty.bind(this)}
          >
            <option value="" selected disabled hidden>
              Difficulty
            </option>
            <option value="">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select> */}
        </div>
      </React.Fragment>
    );
  }
}
