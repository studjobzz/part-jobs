import * as React from "react";
import {
  // Button,
  // Popover,
  Menu,
  MenuItem
} from "../../../node_modules/@blueprintjs/core";
import { UserViewModel } from "../../view-models/UserViewModel";
import { UserStore } from "../../store/UserStore";
import "./welcome.css";
import { Redirect } from "react-router";
import { ReactNode } from "react";
import Popover from "react-simple-popover";
import { ButtonToolbar, Button, OverlayTrigger } from "react-bootstrap";

interface Props {
  updateState: Function;
  renderWelcomeUser: Function;
  userStore: UserStore;
}

interface State {
  redirect: ReactNode;
  open: boolean;
}

const initialState: State = {
  redirect: undefined,
  open: false
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
      this.setState({ redirect: undefined, open: !this.state.open });
    });
  }

  handleClick(e) {
    this.setState({ open: !this.state.open });
  }

  handleClose(e) {
    this.setState({ open: false });
  }

  render() {
    return this.state.redirect ? (
      this.state.redirect
    ) : (
      <ButtonToolbar>
        <Button
          icon="chevron-down"
          className="backColor"
          ref="target"
          text={this.props.renderWelcomeUser()}
          onClick={this.handleClick.bind(this)}
        />
        <Popover
          // className="positioning"
          placement="bottom"
          container={this}
          target={this.refs.target}
          show={this.state.open}
          onHide={this.handleClose.bind(this)}
        >
          <Menu className="hoverMenu">
            <MenuItem
              text="Account details"
              icon="user"
              onClick={() => this.handleRedirect("details/view")}
            />
            <MenuItem
              text="Log out"
              icon="log-out"
              onClick={this.handleClickLogOut.bind(this)}
            />
          </Menu>
        </Popover>
      </ButtonToolbar>
    );
  }
}

export default Welcome;
