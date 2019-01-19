import * as React from 'react'
import { UserStore } from "../../../store/UserStore";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBBtn,
    MDBIcon
  } from "mdbreact";
  
  import {
    Input,
    Label,
    FormFeedback,
    FormGroup,
    Form
  } from "reactstrap"

  import { Link } from "react-router-dom"


interface Props {
    userStore: UserStore;
  }
  
interface State {
    oldPassword: string
    newPassword: string
    newPasswordConfirm: string
    firstName: string
    lastName:string
    email: string
    phone: string
    profileImage: string
    about: string
    formErrors :{
        oldPassword: string
        newPassword: string
        newPasswordConfirm: string
    }
}

const initialState: State = {
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
    firstName: "Dragos",
    lastName:"Cojanu",
    email: "dragoscojanu97@yahoo.ro",
    phone: "0747459142",
    profileImage: "https://yt3.ggpht.com/a-/ACSszfFP-lJsbdTN8Xt9z8chBmUa_FKaA-6lopKoMw=s900-mo-c-c0xffffffff-rj-k-no",
    about: "Building a website is, in many ways, an exercise of willpower. It’s tempting to get distracted by the bells and whistles of the design process, and forget all about creating compelling content.",
    formErrors: {
        oldPassword: "",
        newPassword: "",
        newPasswordConfirm: ""
    }
}

export class AccountChangePassword extends React.Component<Props, State> {
    constructor(props){
        super(props);
        this.state = initialState;
    }

    render() {
        return (
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBCard style = {{ marginTop: "1rem" }}>
                  <MDBCardHeader>
                    <MDBRow>
                      <MDBCol md = "4">
                        <img src={this.state.profileImage} className="img-fluid z-depth-1 rounded-circle" height = "200px" width = "200px" /> 
                      </MDBCol>
                      <MDBCol>
                      <blockquote className="blockquote text-center">
                        <p className="bq-title">{this.state.firstName} {this.state.lastName}</p>
                        <p className="mb-0">{this.state.about}</p>
                        <footer className="blockquote-footer mb-3">{this.state.phone}<cite title= "email"> at {this.state.email}</cite></footer>
                      </blockquote>                  
                      </MDBCol>
                    </MDBRow>
                  </MDBCardHeader>
                  
                    <MDBCardBody className= "text-left">
                      <MDBRow>
                        <MDBCol md = "3"/>
                        <MDBCol md = "5">
                            <Form>
                                <FormGroup> 
                                    <Label for="oldPassword" className = "text-left">Old password</Label>
                                    <Input 
                                        type = "password"
                                        value={this.state.oldPassword} 
                                        onChange = {this.handleOldPasswordChange.bind(this)}
                                        invalid = {this.state.formErrors["oldPassword"].length > 0} 
                                        valid = {this.state.formErrors["oldPassword"].length == 0}
                                        />
                                    <FormFeedback>{this.state.formErrors["oldPassword"]}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="newPassword">New password</Label>
                                    <Input 
                                        type = "password"
                                        value={this.state.newPassword} 
                                        onChange = {this.handleNewPasswordChange.bind(this)}
                                        invalid = {this.state.formErrors["newPassword"].length > 0} 
                                        valid = {this.state.formErrors["newPassword"].length == 0}
                                        />
                                    <FormFeedback>{this.state.formErrors["newPassword"]}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="newPasswordConfirm">Confirm new password</Label>
                                    <Input 
                                        type = "password"
                                        value={this.state.newPasswordConfirm} 
                                        onChange = {this.handleNewPasswordConfirmChange.bind(this)}
                                        invalid = {this.state.formErrors["newPasswordConfirm"].length > 0} 
                                        valid = {this.state.formErrors["newPasswordConfirm"].length == 0}
                                        />
                                    <FormFeedback >{this.state.formErrors["newPasswordConfirm"]}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                        <MDBBtn
                                        color = "success  "
                                        className = "mb-2"
                                        type = "submit"
                                        size = "sm"
                                        >
                                        Salveaza <MDBIcon icon="check" className="ml-1" />
                                        </MDBBtn>
                                        
                                        <Link to = "/account/details/view">
                                            <MDBBtn
                                            color = "default"
                                            className = "mb-2"
                                            size = "sm"
                                            >
                                            Renunta <MDBIcon icon="close" className="ml-1" />
                                            </MDBBtn>
                                        </Link>
                                        
                                </FormGroup>
                            </Form>                            
                        </MDBCol>
                        <MDBCol md = "4"/>
                      </MDBRow>
                    </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        );
    }

    handleOldPasswordChange(event){
        this.setState({oldPassword: event.target.value})

        if(event.target.value.length < 6){
            this.state.formErrors["oldPassword"] = "Parola trebuie sa aibe minim 6 caractere!";
        } else {
            this.state.formErrors["oldPassword"] = "";
        }


    }

    handleNewPasswordChange(event){
        this.setState({newPassword: event.target.value})

        if(event.target.value.length < 6){
            this.state.formErrors["newPassword"] = "Parola trebuie sa aibe minim 6 caractere!";
        } else {
            this.state.formErrors["newPassword"] = "";
        }
    }

    handleNewPasswordConfirmChange(event){
        this.setState({newPasswordConfirm: event.target.value})

        if(event.target.value.length < 6){
            this.state.formErrors["newPasswordConfirm"] = "Parola trebuie sa aibe minim 6 caractere!";
        } if (event.target.value != this.state.newPassword){
            this.state.formErrors["newPasswordConfirm"] = "Parolele nu se potrivesc!";
        }
         else {
            this.state.formErrors["newPasswordConfirm"] = "";
        }
    }
}