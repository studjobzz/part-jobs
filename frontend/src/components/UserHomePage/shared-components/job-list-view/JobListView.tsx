import * as React from "react";
import { observer } from "mobx-react";
import "../../../../shared/list-all.css";
import { JobViewModel } from "../../../../view-models/job";
import { JobListItem } from "../recipe-list-item/JobListItem";
import { Redirect } from "react-router-dom";
// import Spinner from "../../../../shared/spinner/Spinner";

interface Props {
  jobs: JobViewModel[];
  // handleSetFavorites: Function;
  waitingForData: boolean;
  // recipesToOmit: number[];
}

@observer
export class JobListView extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  // private recipeShouldBeOmittedAtRender(recipe) {
  //   return this.props.recipesToOmit.find(id => recipe.id == id);
  // }

  render() {
    return (
      <React.Fragment>
        <div className="list-items">
          {/* <Spinner waitingForData={this.props.waitingForData} /> */}
          {this.props.jobs
            // .filter(recipe => !this.recipeShouldBeOmittedAtRender(recipe))
            .map((job, index) => {
              return (
                <div key={index}>
                  <JobListItem
                    // handleSetFavorites={this.props.handleSetFavorites}
                    job={job}
                    waitingForData={this.props.waitingForData}
                  />
                </div>
              );
            })}
        </div>
      </React.Fragment>
    );
  }
}
