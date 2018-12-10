import * as React from "react";
import { Route } from "react-router";
import { JobForm } from "./JobForm";

export default () => {
  return (
    <React.Fragment>
      <Route exact path="/jobs/add" component={JobForm} />
    </React.Fragment>
  );
};
