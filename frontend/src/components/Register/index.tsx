import * as React from "react";
import { Route } from "react-router";
import { Register } from "./Register";

export default () => {
  return (
    <React.Fragment>
      <Route exact path="/user-register" component={Register} />
    </React.Fragment>
  );
};
