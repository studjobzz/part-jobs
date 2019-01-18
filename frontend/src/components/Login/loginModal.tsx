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
  Icon
} from "mdbreact";
import { Button, ButtonGroup } from "react-bootstrap";
import {
  Form,
  Input,
  FormGroup,
  Label,
  Col,
  Row,
  FormFeedback
} from "reactstrap";
import {} from "@blueprintjs/core";
import ErrorMessageComponent from "./ErrorMessageComponent";

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
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({ logged: !this.state.logged });
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
        <Button rounded onClick={() => this.toggle(1)}>
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
            <Form>
              <FormGroup row>
                <Label for="email" md={2}>
                  <img
                    src={"/registerImages/envelope.png"}
                    alt="envelopeIcon"
                    className="icon"
                  />
                </Label>
                <Col md={10}>
                  <Input
                    name="email"
                    id="email"
                    onChange={this.changeUsername.bind(this)}
                    type="email"
                    placeholder="E-mail"
                    validate
                    error="wrong"
                    success="right"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="password" md={2}>
                  <img
                    src={"/registerImages/lock.png"}
                    alt="lockIcon"
                    className="icon"
                  />
                </Label>
                <Col md={10}>
                  <Input
                    name="password"
                    id="password"
                    placeholder="Parola"
                    type="password"
                    validate
                    onChange={this.changePassword.bind(this)}
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          {this.state.logged ? (
            <div />
          ) : (
            <ErrorMessageComponent onButtonClick={this._onButtonClick} />
          )}
          <ModalFooter className="justify-content-center">
            <ButtonGroup vertical>
              <Button onClick={this.handleUserLogin.bind(this)}>Login</Button>
              <button
                onClick={this.handleUserRegister.bind(this)}
                className="registerButton"
              >
                Nu ai cont? Inregistrare!
              </button>
            </ButtonGroup>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalPage;
