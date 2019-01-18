import * as React from "react";
import {
  UserViewModel,
  LoginUserViewModel
} from "../../view-models/UserViewModel";
import { UserStore } from "../../store/UserStore";
import "./loginModal.css";
import {
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Input,
  Icon
} from "mdbreact";
import { ButtonToolbar, Button } from "react-bootstrap";

interface Props {
  userStore: UserStore;
}

interface State {
  modal1: boolean;
  modal2: boolean;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  logged: boolean;
}

const initialState: State = {
  modal1: false,
  modal2: false,
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
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
    if (this.props.userStore.user.access == null) {
      this.setState({ logged: false });
      return;
    } else {
      this.setState({ logged: true });
      localStorage.setItem("logged", this.props.userStore.user.access);
    }
    localStorage.setItem("user", JSON.stringify(this.props.userStore.user));
    window.location.href = "/user-home";
  }

  private handleUserLogin(): void {
    this.props.userStore.logIn(
      new LoginUserViewModel(this.state.username, this.state.password),
      this.loadUser.bind(this)
    );
  }

  private handleUserRegister() {
    window.location.href = "/user-register";
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
        <Button bsStyle="info" onClick={() => this.toggle(1)}>
          Login
        </Button>
        <Modal
          className="modalLogin"
          isOpen={this.state.modal1}
          toggle={() => this.toggle(1)}
        >
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
            <ButtonToolbar>
              <Button onClick={this.handleUserRegister.bind(this)}>
                Register
              </Button>
              <Button onClick={this.handleUserLogin.bind(this)}>Login</Button>
            </ButtonToolbar>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalPage;
