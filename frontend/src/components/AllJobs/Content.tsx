import * as React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Job from "../Job/JobItem";
import { JobViewModel } from "src/view-models/job";
import "../../shared/list-all.css";

export interface Props {
  jobs: JobViewModel[];
}

export interface State {
  // redirectTo: string;
}

export class Content extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="list-items">
        {this.props.jobs.map((job, index) => {
          return (
            <div className="job-item">
              <Job job={job} index={index} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Content;
