import * as React from "react";
import "./App.css";
import rootStore from "./store/root-store";
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";
import HomeRoute from "./components/Home";
import UserHomePageRoute from "./components/UserHomePage/jobs-list";
import UserCvPageRoute from "./components/UserHomePage/cv";
import AddJobPageRoute from "./components/JobForm";
import TabMenu from "./components/TabMenu/TabMenu";
import AccountDetailsPageRoute from "./components/welcome/account-details";
import AccountDetailsEditPageRoute from "./components/welcome/account-details-edit";
import JobDetailsPageRoute from "./components/JobDetailsPage";
import RegisterPageRoute from "./components/Register";
import TermsPageRoute from "./components/Register/TermsPage";

interface State {
  logged: any;
  clickLogged: boolean;
  registered: boolean;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { logged: "", clickLogged: false, registered: false };
  }

  private updateState(): void {
    if (localStorage.getItem("logged") == null) {
      localStorage.setItem("logged", "");
      localStorage.setItem("user", "");
    }

    if (this.state.logged != localStorage.getItem("logged")) {
      this.setState({
        logged: localStorage.getItem("logged")
      });
    }
  }

  componentDidMount() {
    this.updateState();
  }

  public render() {
    return (
      <div className="App">
        <Provider {...rootStore}>
          <React.Fragment>
            <Router>
              <React.Fragment>
                {this.state.logged != "" ? (
                  <React.Fragment>
                    <TabMenu
                      viewStore={rootStore.viewStore}
                      userStore={rootStore.userStore}
                    />
                    <HomeRoute />
                    <UserHomePageRoute />
                    <UserCvPageRoute />
                    <AddJobPageRoute />
                    <AccountDetailsPageRoute />
                    <AccountDetailsEditPageRoute />
                    <JobDetailsPageRoute />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <HomeRoute />
                    <RegisterPageRoute />
                    <JobDetailsPageRoute />
                    <TermsPageRoute />
                  </React.Fragment>
                )}
              </React.Fragment>
            </Router>
          </React.Fragment>
        </Provider>
      </div>
    );
  }
}

export default App;
