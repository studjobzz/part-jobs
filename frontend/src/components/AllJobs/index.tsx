import * as React from "react";
import { Route } from "react-router";
import { Content } from "./Content";

export default () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Content} />
      <Route exact path="/home" component={Content} />
    </React.Fragment>
  );
};
