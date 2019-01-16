import * as React from "react";
import {
  Button,
  Popover,
  Menu,
  MenuItem
} from "../../../node_modules/@blueprintjs/core";
import { UserViewModel } from "../../view-models/UserViewModel";
import { UserStore } from "../../store/UserStore";
import "./welcome.css";
import { Redirect } from "react-router";
import { ReactNode } from "react";
interface Props {
  updateState: Function;
  renderWelcomeUser: Function;
  userStore: UserStore;
}

interface State {
  redirect: ReactNode;
}

const initialState: State = {
  redirect: undefined
};

class Welcome extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  private handleClickLogOut(): any {
    debugger;
    localStorage.setItem("logged", "");
    var nullCheck = localStorage.getItem("user");
    if (nullCheck == null) {
    } else {
      var user: any = JSON.parse(nullCheck);
    }
    const currentUser = new UserViewModel(
      user.firs_name,
      user.last_name,
      user.email,
      user.password,
      user.access
    );
    this.props.userStore.logOut(currentUser);
    this.props.updateState();
    localStorage.setItem("user", JSON.stringify(""));
    window.location.href = "/home";
  }

  private handleRedirect(destinationTab: string) {
    const destinationURL = "/account/" + destinationTab;
    this.setState({ redirect: <Redirect to={destinationURL} /> }, () => {
      this.setState({ redirect: undefined });
    });
  }

  render() {
    return this.state.redirect ? (
      this.state.redirect
    ) : (
      <React.Fragment>
        <Popover
          className="positioning"
          content={
            <Menu className="hoverMenu">
              <MenuItem
                text="Account details"
                icon="user"
                onClick={() => this.handleRedirect("details/view")}
              />
              <MenuItem text="Settings" icon="settings" />
              <MenuItem text="Notifications" icon="notifications" />
              <MenuItem
                text="Log out"
                icon="log-out"
                onClick={this.handleClickLogOut.bind(this)}
              />
            </Menu>
          }
        >
          <Button
            icon="chevron-down"
            className="backColor"
            text={this.props.renderWelcomeUser()}
          />
        </Popover>
      </React.Fragment>
    );
  }
}

export default Welcome;
