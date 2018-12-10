import * as React from "react";
import { Route } from "react-router";
import { Login } from "../Login/login";

export default () => {
  return (
    <React.Fragment>
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  );
};
