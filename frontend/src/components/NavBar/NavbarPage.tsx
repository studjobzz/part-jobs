import * as React from "react";
import "mdbreact/dist/css/mdb.css";
import "../../shared/list-all.css";
import ModalPage from "../Login/loginModal";
import "./navbar-style.css";


import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  FormInline,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "mdbreact";


import { UserStore } from "src/store/UserStore";

interface Props {
  userStore: UserStore;
}

interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: false
};

class NavbarPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <Navbar
        className="navbar"
        dark
        expand="md"
        fixed="top"
      >
        <NavbarBrand>
          <strong><img src={"/navbarImages/logobun2.png"} alt="logo" className="logo"/></strong>
        </NavbarBrand>
          <NavbarNav right>
            <NavItem>
              <FormInline waves>
                <div className="md-form my-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </FormInline>
            </NavItem>
            <NavItem>
              <ModalPage userStore={this.props.userStore} />
              {/* <NavLink to="/login">Login</NavLink> */}
            </NavItem>
          </NavbarNav>
      </Navbar>
      //</Routes>
    );
  }
}

export default NavbarPage;
