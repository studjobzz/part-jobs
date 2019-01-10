import * as React from "react";
import "./App.css";
import rootStore from "./store/root-store";
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";
import JobFormRoute from "./components/JobForm";
import HomeRoute from "./components/Home";
import UserHomePageRoute from "./components/UserHomePage/jobs-list";
import TabMenu from "./components/TabMenu/TabMenu";

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
                <JobFormRoute />
                <UserHomePageRoute />
                {/* <UserTabMenuRoute /> */}
              </React.Fragment>
            </Router>
          </React.Fragment>
        </Provider>
      </div>
    );
  }
}

export default App;
