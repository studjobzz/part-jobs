import { Route } from "react-router";
import * as React from "react";
import { AccountChangePassword } from "./AccountChangePassword";

export default () => {
  return <Route path="/account/details/change_password" component={AccountChangePassword} />;
};
