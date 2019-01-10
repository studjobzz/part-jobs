import * as React from "react";
import { observer, inject } from "mobx-react";
import { Link, Redirect } from "react-router-dom";
import * as classNames from "classnames";
import { HeaderTabs } from "../../view-models/header-tabs";
import { ViewStore } from "src/store/view-store";
import { Icon } from "@blueprintjs/core";
import "./tab-menu.css";
import { SearchInput } from "../UserHomePage/SearchInput";
import Welcome from "../welcome/Welcome";
import { UserViewModel } from "../../view-models/UserViewModel";
import { UserStore } from "src/store/UserStore";
import {
  Button,
  Popover,
  Menu,
  MenuItem
} from "../../../node_modules/@blueprintjs/core";
import "./welcome.css";

interface Props {
  viewStore: ViewStore;
  userStore: UserStore;
}

interface State {
  redirectTo: string;
  logged: any;
  clickLogged: boolean;
  registered: boolean;
}

@observer
class TabMenu extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      redirectTo: "",
      logged: "",
      clickLogged: false,
      registered: false
    };
  }

  isActive(tab: HeaderTabs) {
    return this.props.viewStore.activeHeaderTab === tab;
  }

  private changeActiveTab(tab: HeaderTabs) {
    this.setState({ redirectTo: "" });
    this.props.viewStore.changeActiveHeaderTab(tab);
  }

  private handleRedirect(): React.ReactNode {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    }
    return null;
  }

  handleEnter(searchString: any) {
    this.changeActiveTab(HeaderTabs.search);
    if (searchString == "") searchString = encodeURI(" ");
    this.setState({ redirectTo: "/searchResults/" + searchString });
    // this.props.filteredStore.loadFilteredList(searchString);
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

  private renderWelcomeUser(): string {
    // var userJson = localStorage.getItem("user");
    // if (userJson != null) {
    //   var user: any = JSON.parse(userJson);
    // }
    // const currentUser = new UserViewModel(
    //   user.firstName,
    //   user.lastName,
    //   user.email,
    //   user.password,
    //   user.tokenGuid
    // );
    // return "Serus " + currentUser.firstName + " " + currentUser.lastName;
    return "Serus";
  }

  public render() {
    return (
      <div>
        {this.handleRedirect()}
        <div className="header-tabs">
          <ul className="tabs">
            <li
              className={classNames({
                active: this.isActive(HeaderTabs.userHome)
              })}
            >
              <Link
                to="/user-home"
                onClick={() => this.changeActiveTab(HeaderTabs.userHome)}
              >
                <Icon className="icon-home" icon="home" />
                HOME
              </Link>
            </li>
            <li
              className={classNames({
                active: this.isActive(HeaderTabs.cv)
              })}
            >
              <Link
                to="/user-cv"
                onClick={() => this.changeActiveTab(HeaderTabs.cv)}
              >
                <Icon className="icon-ingredients-list" icon="annotation" />
                CV-URI
              </Link>
            </li>
            <li
              className={classNames({
                active: this.isActive(HeaderTabs.career)
              })}
            >
              <Link
                to="/user-career"
                onClick={() => this.changeActiveTab(HeaderTabs.career)}
              >
                <Icon className="icon-ingredients-list" icon="annotation" />
                CARIERĂ
              </Link>
            </li>
            {/* <li
              className={classNames({
                active: this.isActive(HeaderTabs.search)
              })}
            >
              <SearchInput onSearch={this.handleEnter.bind(this)} />
            </li> */}
            <li>
              <Welcome
                renderWelcomeUser={this.renderWelcomeUser.bind(this)}
                updateState={this.updateState.bind(this)}
                userStore={this.props.userStore}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TabMenu;
