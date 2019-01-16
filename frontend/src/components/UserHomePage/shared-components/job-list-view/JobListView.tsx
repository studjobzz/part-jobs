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
  jobsToOmit: number[];
  waitingForData: boolean;
}

@observer
export class JobListView extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  private jobShouldBeOmittedAtRender(job: JobViewModel) {
    return this.props.jobsToOmit.find(id => job.pk == id);
  }

  render() {
    return (
      <React.Fragment>
        <div className="list-items">
          {/* <Spinner waitingForData={this.props.waitingForData} /> */}
          {this.props.jobs
            .filter(job => !this.jobShouldBeOmittedAtRender(job))
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
