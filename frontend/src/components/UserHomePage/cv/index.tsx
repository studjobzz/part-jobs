import { Route } from "react-router";
import * as React from "react";
import { UserCv } from "./user-cv";

export default () => {
  return <Route path="/user-cv" component={UserCv} />;
};
