import { Route } from "react-router";
import * as React from "react";
import { Favorites } from "./favorites";

export default () => {
  return <Route path="/favorites" component={Favorites} />;
};
