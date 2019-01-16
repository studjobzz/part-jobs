import * as React from "react";
import "mdbreact/dist/css/mdb.css";
import "../../shared/list-all.css";
import ModalPage from "../Login/loginModal";

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
        color="light-blue lighten-2"
        dark
        expand="md"
        fixed="top"
      >
        <NavbarToggler onClick={this.state.isOpen} />
        <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <NavbarNav left>
            <NavItem active>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="#!">Action</DropdownItem>
                  <DropdownItem href="#!">Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </NavbarNav>
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
        </Collapse>
      </Navbar>
      //</Routes>
    );
  }
}

export default NavbarPage;
