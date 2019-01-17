import * as React from "react";
import { UserStore } from "../../../store/UserStore";
import { Icon, Tab, Tabs } from "@blueprintjs/core";
import { UserCommandViewModel } from "../../../view-models/UserViewModel";
import { ErrView } from "./ErrView";
import { inject, observer } from "mobx-react";
import "../account-details/account-details.css";
import { Link, Redirect } from "react-router-dom";
import { ReactNode } from "react";
// import { ConfirmModal } from "./ConfirmModal";
import "./UploadPage.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  CustomInput
} from "reactstrap";

import calendar from "./calendar.png";
import envelope from "./envelope.png";
import phone from "./call-answer.png";
import avatar from "./avatar.png";
import map from "./map.png";

class UploadFile extends React.Component {

  };

interface Props {
  userStore: UserStore;
}

interface State {
  editedUser: UserCommandViewModel;
  err: UserCommandViewModel;
  updateResponseMsg: string;
  updateWasSuccessful: boolean;
  responseHasBeenReceived: boolean;
  redirect: ReactNode;
}

function getInitialState(): State {
  return {
    editedUser: new UserCommandViewModel({}),
    err: {
      id: 0,
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      oldPassword: "",
      newPassword: "",
      repeatPassword: ""
    },
    updateResponseMsg: "",
    updateWasSuccessful: false,
    responseHasBeenReceived: false,
    redirect: undefined
  };
}

@inject("userStore")
@observer
export class AccountDetailsEdit extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // if (this.props.userStore.user == undefined) {
    //   this.props.userStore.loadUserFromLocalStorage();
    // }
    this.state = getInitialState();
    // this.state.editedUser.id = this.props.userStore.user.id;
    // this.state.editedUser.first_name = this.props.userStore.user.first_name;
    // this.state.editedUser.last_name = this.props.userStore.user.last_name;
    // this.state.editedUser.email = this.props.userStore.user.email;
  }

  private handleSubmitChanges(event) {
    event.preventDefault();
    if (this.validateForm()) {
      this.props.userStore.updateUser(this.state.editedUser, () => {
        let { err, updateWasSuccessful } = this.state;
        let updateResponseMsg = "";
        const statusCode = this.props.userStore.statusCode;
        let responseHasBeenReceived = false;
        switch (statusCode) {
          case 401:
            err.oldPassword = "Invalid password";
            updateWasSuccessful = false;
            break;
          case 400:
            updateResponseMsg = "Ill-formed request";
            updateWasSuccessful = false;
            responseHasBeenReceived = true;
            break;
          case 500:
            updateResponseMsg =
              "The request could not be completed due to an unknown error";
            updateWasSuccessful = false;
            responseHasBeenReceived = true;
            break;
          case 200:
            updateResponseMsg = "The user was successfully updated";
            updateWasSuccessful = true;
            responseHasBeenReceived = true;
            break;
        }
        this.setState({
          err: err,
          updateResponseMsg: updateResponseMsg,
          updateWasSuccessful: updateWasSuccessful,
          responseHasBeenReceived: responseHasBeenReceived
        });
      });
    }
  }

  private validateForm() {
    let err = new UserCommandViewModel({});
    const editedUser = this.state.editedUser;
    let ok = true;
    if (!editedUser.first_name) {
      err.first_name = "First Name required";
      ok = false;
    }
    if (!editedUser.last_name) {
      err.last_name = "Last Name required";
      ok = false;
    }
    if (!editedUser.email) {
      err.email = "Email required";
      ok = false;
    }
    if (!editedUser.oldPassword) {
      err.oldPassword = "Old Password required";
      ok = false;
    }
    if (!editedUser.newPassword) {
      err.newPassword = "New Password required";
      ok = false;
    }
    if (!editedUser.repeatPassword) {
      err.repeatPassword = "Password confirmation required";
      ok = false;
    }
    if (
      err.repeatPassword == undefined &&
      editedUser.newPassword != editedUser.repeatPassword
    ) {
      err.repeatPassword = "New Password does not match Repeat Password field";
      ok = false;
    }
    this.setState({ err: err });
    return ok;
  }

  private handleRedirect() {
    this.props.userStore.logIn(
      {
        email: this.state.editedUser.email,
        password: this.state.editedUser.newPassword
      },
      () => {
        this.setState({ redirect: <Redirect to="/account/details/view" /> });
      }
    );
  }

  render() {
    const { editedUser, err } = this.state;
    return (
      <div className="container1">
        <Form className="form1">
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label for="firstName" className="labelP">
                  <img src={avatar} alt="avatarIcon" className="iconP" />
                </Label>
              </FormGroup>
            </Col>

            <Col md={5}>
              <FormGroup>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Prenume"
                />
              </FormGroup>
            </Col>

            <Col md={5}>
              <FormGroup>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Nume"
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup row>
            <Label for="email" md={2}>
              <img src={envelope} alt="envelopeIcon" className="icon" />
            </Label>
            <Col md={10}>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="something@domain.com"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleDatetime" md={2}>
              <img src={calendar} alt="calendarIcon" className="icon" />
            </Label>
            <Col>
              <Input
                type="datetime"
                name="datetime"
                id="exampleDatetime"
                placeholder="Data nasterii"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="telefon" md={2}>
              <img src={phone} alt="phoneIcon" className="icon" />
            </Label>
            <Col>
              <Input
                type="text"
                name="telefon"
                id="telefon"
                placeholder="+(40)7xxxxxxxx"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="address" md={2}>
              <img src={map} alt="mapIcon" className="icon" />
            </Label>
            <Col>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="Adresa"
              />
            </Col>
          </FormGroup>

          <Row form>
            <Col sm={6}>
              <FormGroup tag="Sex" className="sex">
                <legend className="col-form-label">
                  <b>Sex</b>
                </legend>

                <FormGroup check className="sex">
                  <Input type="radio" name="sex" />
                  Masculin <br />
                  <Input type="radio" name="sex" />
                  Feminin
                </FormGroup>
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup tag="status" className="status">
                <legend className="col-form-label">
                  <b>Stare civila</b>
                </legend>

                <FormGroup check className="status">
                  <Input type="radio" name="status" /> Casatorit <br />
                  <Input type="radio" name="status" /> Necasatorit
                </FormGroup>
              </FormGroup>
            </Col>
          </Row>
          <br />

          <FormGroup>
            <Label for="exampleCustomFileBrowser">Incarca CV</Label>
            <CustomInput type="file" id="cvUpload" name="cvUpload" />
          </FormGroup>

          <FormGroup check>
            <Input type="checkbox" name="gdpr" id="gdpr" />
            <span id="gdpr">
              Sunt de acord cu prelucrarea datelor cu caracter personal.
            </span>
          </FormGroup>
          <br />
          <Button color="info"> Submit </Button>
        </Form>
      </div>
    );
  }
}
