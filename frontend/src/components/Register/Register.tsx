import * as React from "react";
import "./register-style.css";
import {
  Button,
  ButtonToolbar,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  CustomInput
} from "reactstrap";
import { Link } from "react-router-dom";
import TermsModal from "./TermsPage/TermsModal";

interface Props {}
interface State {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  shield: string;
  date: string;
  telefon: string;
  address: string;
  sex: string;
  status: string;
  cvUpload: string;
  modal: false;
  showComponent: boolean;
}

export class Register extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      shield: "",
      date: "",
      telefon: "",
      address: "",
      sex: "",
      status: "",
      cvUpload: "",
      modal: false,
      showComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({ showComponent: !this.state.showComponent });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container1">
          <Form className="form1">
            <Row form>
              <Col md={2}>
                <FormGroup>
                  <Label for="firstName" className="labelP">
                    <img
                      src={"/registerImages/avatar.png"}
                      alt="avatarIcon"
                      className="iconP"
                    />
                  </Label>
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Input
                    onChange={event => this.handleChangeFirstName(event)}
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
                    onChange={event => this.handleChangeLastName(event)}
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
                <img
                  src={"/registerImages/envelope.png"}
                  alt="envelopeIcon"
                  className="icon"
                />
              </Label>
              <Col md={10}>
                <Input
                  onChange={event => this.handleChangeEmail(event)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="something@domain.com"
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
                  onChange={event => this.handleChangePassword(event)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Parola"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" md={2}>
                <img
                  src={"/registerImages/shield.png"}
                  alt="shieldIcon"
                  className="icon"
                />
              </Label>
              <Col md={10}>
                <Input
                  onChange={event => this.handleChangeShield(event)}
                  type="password"
                  name="shield"
                  id="shield"
                  placeholder="Reintroduceti Parola"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleDatetime" md={2}>
                <img
                  src={"/registerImages/calendar.png"}
                  alt="calendarIcon"
                  className="icon"
                />
              </Label>
              <Col>
                <Input
                  onChange={event => this.handleChangeDate(event)}
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="Data nasterii"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="telefon" md={2}>
                <img
                  src={"/registerImages/call-answer.png"}
                  alt="phoneIcon"
                  className="icon"
                />
              </Label>
              <Col>
                <Input
                  onChange={event => this.handleChangeTelefon(event)}
                  type="text"
                  name="telefon"
                  id="telefon"
                  placeholder="+(40)7xxxxxxxx"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="address" md={2}>
                <img
                  src={"/registerImages/map.png"}
                  alt="mapIcon"
                  className="icon"
                />
              </Label>
              <Col>
                <Input
                  onChange={event => this.handleChangeAdress(event)}
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
                    <b> Sex </b>
                  </legend>
                  <FormGroup check className="sex">
                    <Input
                      onChange={event => this.handleChangeSex(event)}
                      type="radio"
                      name="sex"
                      value="masculin"
                    />
                    Masculin <br />
                    <Input
                      onChange={event => this.handleChangeSex(event)}
                      type="radio"
                      name="sex"
                      value="feminin"
                    />
                    Feminin{" "}
                  </FormGroup>
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup tag="status" className="status">
                  <legend className="col-form-label">
                    <b> Stare civila </b>
                  </legend>
                  <FormGroup check className="status">
                    <Input
                      onChange={event => this.handleChangeStatus(event)}
                      type="radio"
                      name="status"
                      value="casatorit"
                    />
                    Casatorit <br />
                    <Input
                      onChange={event => this.handleChangeStatus(event)}
                      type="radio"
                      name="status"
                      value="necasatorit"
                    />
                    Necasatorit
                  </FormGroup>
                </FormGroup>
              </Col>
            </Row>
            <br />
            <FormGroup>
              <Label for="exampleCustomFileBrowser"> Incarca CV </Label>
              <CustomInput type="file" id="cvUpload" name="cvUpload" />
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" name="gdpr" id="gdpr" />
              <span>
                Sunt de acord cu&nbsp;
                <a onClick={this._onButtonClick} style={{ color: "#00a5da" }}>
                  termenii si conditiile
                </a>
                &nbsp;WorkForMe.
              </span>
              {this.state.showComponent ? (
                <TermsModal onButtonClick={this._onButtonClick} />
              ) : null}
            </FormGroup>
            <br />
            <ButtonToolbar className="buttonToolbar">
              <Link to="/home">
                <Button color="info">Submit</Button>
              </Link>
              <Link to="/home">
                <Button color="secondary">Back</Button>
              </Link>
            </ButtonToolbar>
          </Form>
        </div>
      </div>
    );
  }

  handleChangeFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  handleChangeLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleChangeShield(event) {
    this.setState({ shield: event.target.value });
  }

  handleChangeDate(event) {
    this.setState({ date: event.target.value });
  }

  handleChangeTelefon(event) {
    this.setState({ telefon: event.target.value });
  }

  handleChangeAdress(event) {
    this.setState({ address: event.target.value });
  }

  handleChangeSex(event) {
    this.setState({ sex: event.target.value });
  }

  handleChangeStatus(event) {
    this.setState({ status: event.target.value });
  }

  handleChangeCvUpload(event) {
    this.setState({ cvUpload: event.target.value });
  }
}

export default Register;
