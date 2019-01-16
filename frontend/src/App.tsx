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

  public render() {
    return (
      <div className="App">
        <Provider {...rootStore}>
          <React.Fragment>
            <Router>
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
              </React.Fragment>
            </Router>
          </React.Fragment>
        </Provider>
      </div>
    );
  }
}

export default App;
