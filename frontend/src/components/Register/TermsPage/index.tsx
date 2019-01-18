import * as React from "react";
import { Route } from "react-router";
import { TermsPage } from "./TermsPage";

export default () => {
  return (
    <React.Fragment>
      <Route exact path="/terms-page" component={TermsPage} />
    </React.Fragment>
  );
};
