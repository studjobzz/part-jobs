import { Route } from "react-router";
import * as React from "react";
import { UserCareer } from "./user-career";

export default () => {
  return <Route path="/user-career" component={UserCareer} />;
};
