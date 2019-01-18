import * as React from "react";
import { Route } from "react-router";
import { ContentForHome } from "./ContentForHome";

export default () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={ContentForHome} />
      <Route exact path="/home" component={ContentForHome} />
    </React.Fragment>
  );
};
