import * as React from "react";
import { Route } from "react-router";
import { Home } from "./Home";

export default () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
    </React.Fragment>
  );
};
