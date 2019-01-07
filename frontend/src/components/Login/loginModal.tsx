import * as React from "react";
import { UserViewModel } from "../../view-models/UserViewModel";
import { UserStore } from "../../store/UserStore";
import { observer, inject } from "mobx-react";

import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Input,
  Icon,
  Tooltip,
  Fa
} from "mdbreact";

interface Props {
  userStore: UserStore;
}

interface State {
  modal1: boolean;
  modal2: boolean;
  username: string;
  password: string;
  logged: boolean;
}

const initialState: State = {
  modal1: false,
  modal2: false,
  username: "",
  password: "",
  logged: true
};

export class ModalPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  toggle = (nr: any) => {
    let modalNumber = "modal" + nr;
    this.setState({
      ...this.state,
      [modalNumber]: !this.state[modalNumber]
    });
  };

  private loadUser(): void {
    if (this.props.userStore.user.tokenGuid == null) {
      this.setState({ logged: false });
      return;
    } else {
      this.setState({ logged: true });
      localStorage.setItem("logged", this.props.userStore.user.tokenGuid);
    }
    localStorage.setItem("user", JSON.stringify(this.props.userStore.user));
    window.location.href = "/";
  }

  private handleUserLogin(): void {
    debugger;
    console.log(this.state, "this is state");
    console.log(this.props, "this is props");
    this.props.userStore.logIn(
      new UserViewModel("", "", this.state.username, this.state.password, ""),
      this.loadUser.bind(this)
    );
  }

  private useForPresent(): void {
    window.location.href = "/user-home";
  }

  private changeUsername(e: any): void {
    this.setState({ username: e.target.value });
  }

  private changePassword(e: any): void {
    this.setState({ password: e.target.value });
  }

  private errorMessage(error: string) {
    return error !== "" ? (
      <div className="error ">
        <Icon icon="delete" />
        <span className="error-message">{error}</span>
      </div>
    ) : null;
  }

  render() {
    return (
      <Container>
        <Button rounded onClick={() => this.toggle(1)}>
          Login
        </Button>
        <Button rounded onClick={() => this.toggle(2)}>
          Register
        </Button>
        <Modal isOpen={this.state.modal1} toggle={() => this.toggle(1)}>
          <ModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={() => this.toggle(1)}
          >
            Sign in
          </ModalHeader>
          <ModalBody>
            {/* <form className="mx-3 grey-text"> */}
            <Input
              label="Type your email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
              onChange={this.changeUsername.bind(this)}
            />
            <Input
              label="Type your password"
              icon="lock"
              group
              type="password"
              validate
              onChange={this.changePassword.bind(this)}
            />

            {/* </form> */}
          </ModalBody>
          {this.state.logged ? (
            <div />
          ) : (
            this.errorMessage("Invalid email or password!")
          )}
          <ModalFooter className="justify-content-center">
            {/* <Button onClick={this.handleUserLogin.bind(this)}>Login</Button> */}
            <Button onClick={this.useForPresent.bind(this)}>Login</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modal2} toggle={() => this.toggle(2)}>
          <ModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={() => this.toggle(2)}
          >
            Sign up
          </ModalHeader>
          <ModalBody>
            <Input
              icon="user"
              label="Your name"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <Input
              label="Your email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
            />
            <Input
              label="Your password"
              icon="lock"
              group
              type="password"
              validate
            />
          </ModalBody>
          <ModalFooter className="justify-content-center">
            <Button color="deep-orange" onClick={() => this.toggle(2)}>
              SIGN UP
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalPage;
