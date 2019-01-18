import * as React from "react";
import { Route } from "react-router";
import { JobDetails } from "./JobDetailsPage";

export default () => {
  return (
    <React.Fragment>
      <Route exact path="/job-details/:antePage/:id" component={JobDetails} />
    </React.Fragment>
  );
};
