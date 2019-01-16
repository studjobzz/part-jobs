import * as React from "react";
import { Route } from "react-router";
import { JobForm } from "./JobForm";

export default () => {
  return (
    <React.Fragment>
      <Route exact path="/add-job" component={JobForm} />
    </React.Fragment>
  );
};
