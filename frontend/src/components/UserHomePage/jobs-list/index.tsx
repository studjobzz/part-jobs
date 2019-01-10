import { Route } from "react-router";
import * as React from "react";
import { JobsList } from "./JobsList";

export default () => {
  return <Route path="/user-home" component={JobsList} />;
};
