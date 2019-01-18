import React, { Component } from "react";
import "./contactUs-styles.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
} from "reactstrap";

import envelope from "./envelope.png";
import phone from "./call-answer.png";
import avatar from "./avatar.png";
import textArea from "./speech.png";
import envelopeData from "./envelopeData.png";
import phoneData from "./callData.png";

class ContactUs extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="container1">
          <Form className="form1">
            <Row>
              <Col className="title">
                Contacteaza-ne
              </Col>
            </Row><br/><br/>
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
              <Label for="telefon" md={2}>
                <img src={textArea} alt="phoneIcon" className="icon" />
              </Label>
              <Col>
                <Input type="textarea" name="text" id="exampleText" />
              </Col>
            </FormGroup>
            <br />
            <Button color="info"> Trimite </Button>
            <br /><br/>
            <Row>
              <Col><img src={phoneData} alt="phoneIcon" className="iconContact" /><span className="contactData">&nbsp;&nbsp;0757650868</span></Col>
              <Col><img src={envelopeData} alt="envelopeIcon" className="iconContact" /><span className="contactData">&nbsp;&nbsp;contact@workforme.com</span></Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
