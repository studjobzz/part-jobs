import * as React from "react";
import "./App.css";
import rootStore from "./store/root-store";
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";
import JobFormRoute from "./components/JobForm";
import HomeRoute from "./components/Home";
import LoginRoute from "./components/Login";
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Provider {...rootStore}>
          <React.Fragment>
            <Router>
              <React.Fragment>
                <LoginRoute />
                <HomeRoute />
                <JobFormRoute />
              </React.Fragment>
            </Router>
          </React.Fragment>
        </Provider>
      </div>
    );
  }
}

export default App;
