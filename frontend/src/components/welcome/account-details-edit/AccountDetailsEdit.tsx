import * as React from "react";
import { UserStore } from "../../../store/UserStore";
import { inject, observer } from "mobx-react";
import "../account-details/account-details.css";
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
  CustomInput,
  Form
} from "reactstrap"





interface Props {
  userStore: UserStore;
}

interface State {
  profileImage: string
  profileImage_data: File
  firstName: string
  lastName:string
  email: string
  phone: string
  about: string
  adress: string
  birthday: Date
  CV: string
  CV_data: File
}

const initialState: State = {
  profileImage: "https://yt3.ggpht.com/a-/ACSszfFP-lJsbdTN8Xt9z8chBmUa_FKaA-6lopKoMw=s900-mo-c-c0xffffffff-rj-k-no",
  profileImage_data: new File([''],''),
  firstName: "Dragos",
  lastName:"Cojanu",
  email: "dragoscojanu97@yahoo.ro",
  phone: "0747459142",
  about: "Building a website is, in many ways, an exercise of willpower. It’s tempting to get distracted by the bells and whistles of the design process, and forget all about creating compelling content.",
  adress: "str. Principala, nr. 211",
  birthday: new Date('10/25/1997'),
  CV: "https://firebasestorage.googleapis.com/v0/b/reactdb-5d0b2.appspot.com/o/Requirement.pdf?alt=media&token=830f9b8f-6836-46dc-b0ed-cd6bd55f3035",
  CV_data: new File([''],'')
}


@inject("userStore")
@observer
export class AccountDetailsEdit extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  handleCvChange(event) {
    this.setState({CV_data: event.target.files[0]})
  }

  handleBrthdayChange(event){
    this.setState({birthday: event.target.value})
  }

  handleAdressChange(event){
    this.setState({adress: event.target.value})
  }

  handlePhoneChange(event){
    this.setState({phone: event.target.value})
  }

  handleFirstNameChange(event){
    this.setState({firstName: event.target.value})
  }

  handleLastNameChange(event){
    this.setState({lastName: event.target.value})
  }

  handleAboutChange(event){
    this.setState({about: event.target.value})
  }

  handleImageChange(event){
    this.setState({profileImage_data: event.target.files[0]})
  }

  render() {
    const { user } = this.props.userStore;
    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard style = {{ marginTop: "1rem" }}>
            <Form className="form1">
            <MDBCardHeader>
              <MDBRow>
                <MDBCol md = "4">
                  <img src={this.state.profileImage} className="img-fluid z-depth-1 rounded-circle" height = "200px" width = "200px" /> 
                  <br/><br/>
                  <CustomInput type = "file" label = "Schimba poza"  onChange = {this.handleImageChange.bind(this)}/>
                  <label>
                      {this.state.profileImage_data.name}
                    </label>
                </MDBCol>
                <MDBCol>
                <blockquote className="blockquote text-center">
                  <p className="bq-title">{this.state.firstName} {this.state.lastName}</p>
                  <p className="mb-0">
                  
                  <Input type="textarea" rows = "3" value = {this.state.about} onChange = {this.handleAboutChange.bind(this)} />
                  
                  </p>
                  <footer className="blockquote-footer mb-3">{this.state.phone}<cite title= "email"> at {this.state.email}</cite></footer>
                </blockquote>                  
                </MDBCol>
              </MDBRow>
            </MDBCardHeader>
            
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md = "1"/>
                  <MDBCol>
                  <h1 className="text-left">About </h1>
                  <hr/>
                    <dl className="row">
                      <dt className="col-sm-4 text-left">Last name</dt>
                      <dd className="col-sm-2"/>
                      <dd className="col-sm-4">
                        <input type="text" className="form-control" value={this.state.lastName} onChange = {this.handleLastNameChange.bind(this)}/>
                      </dd>
                      <dd className="col-sm-2"/>

                      <dt className="col-sm-4 text-left">First name</dt>
                      <dd className="col-sm-2"/>
                      <dd className="col-sm-4">
                        <input type="text" className="form-control" value={this.state.firstName} onChange = {this.handleFirstNameChange.bind(this)}/>
                      </dd>
                      <dd className = "col-sm-2"/>

                      <dt className="col-sm-4 text-left">eMail</dt>
                      <dd className="col-sm-2"/>
                      <dd className="col-sm-4">
                        <input type="text" className="form-control" value={this.state.email} disabled/>
                      </dd>
                      <dd className = "col-sm-2"/>

                      <dt className="col-sm-4 text-left">Password</dt>
                      <dd className="col-sm-2"/>
                      <dd className="col-sm-4">
                        <input type="password" className="form-control" value="Parola" disabled/> 
                      </dd>
                      <dd className = "col-md-2 text-left"/>                      

                      <dt className="col-sm-4 text-left">Phone number</dt>
                      <dd className="col-sm-2"/>
                      <dd className="col-sm-4">
                        <input type="text" className="form-control" value={this.state.phone} onChange = {this.handlePhoneChange.bind(this)}/>
                      </dd>
                      <dd className = "col-sm-2"/>

                      <dt className="col-sm-4 text-left">Adresa</dt>
                      <dd className="col-sm-2"/>
                      <dd className="col-sm-4">
                        <input type="text" className="form-control" value={this.state.adress} onChange = {this.handleAdressChange.bind(this)}/>
                      </dd>
                      <dd className = "col-sm-2"/>

                      <dt className="col-sm-4 text-left">Data nasterii</dt>
                      <dd className="col-sm-2"/>
                      <dd className="col-sm-4">
                        <Input type="datetime" value={this.state.birthday.toDateString()} onChange = {this.handleBrthdayChange.bind(this)}/>
                      </dd>
                      <dd className = "col-sm-2"/>

                      <dd className = "col-sm-2"/>
                      <dd className="col-sm-8">
                        <CustomInput type = "file" label = "Adauga noul CV" onChange = {this.handleCvChange.bind(this)}/>
                        <label>
                          {this.state.CV_data.name}
                        </label>
                      </dd>
                      <dd className = "col-sm-2"/>

                      <dt className = "col-sm-2"/>
                      <dt className="col-sm-4 text-right">
                        <MDBBtn
                          color = "success  "
                          className = "mb-2"
                          type = "submit"
                          size = "sm"
                        >
                          Salveaza <MDBIcon icon="check" className="ml-1" />
                        </MDBBtn>
                      </dt>

                      <dt className="col-sm-4 text-right">
                        <MDBBtn
                          color = "default"
                          className = "mb-2"
                          type = "submit"
                          size = "sm"
                        >
                          Renunta <MDBIcon icon="close" className="ml-1" />
                        </MDBBtn>
                      </dt>
                      <dt className = "col-sm-2"/>

                    </dl>
                  </MDBCol>
                  <MDBCol md = "4"/>
                </MDBRow>
              </MDBCardBody>
            </Form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}
