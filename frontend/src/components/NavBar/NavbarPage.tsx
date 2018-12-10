import * as React from "react";
import "mdbreact/dist/css/mdb.css";
import "../../shared/list-all.css";

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
  DropdownItem
} from "mdbreact";

interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: false
};

class NavbarPage extends React.Component {
  state = initialState;
  toggleCollapse = this.setState({ isOpen: this.state.isOpen });

  render() {
    return (
      //<Routes>
      <Navbar
        className="navbar"
        color="light-blue lighten-2"
        dark
        expand="md"
        fixed="top"
      >
        {/* <NavbarBrand>
          {/* <NavLink to="!#"> */}
        {/* </NavLink> */}
        {/* </NavbarBrand> */}
        <NavbarToggler onClick={this.toggleCollapse} />
        <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <NavbarNav left>
            <NavItem active>
              <NavLink to="/jobs/add">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/jobs/add">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/jobs/add">Pricing</NavLink>
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
              <NavLink to="/login">Login</NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
      //</Routes>
    );
  }
}

export default NavbarPage;
