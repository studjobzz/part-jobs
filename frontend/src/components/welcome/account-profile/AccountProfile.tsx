import * as React from "react";
import { UserStore } from "../../../store/UserStore";
import { inject, observer } from "mobx-react";
import "./account-details.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
  MDBIcon,
} from "mdbreact";


interface Props {
  userStore: UserStore;
}

interface State {
  profilImage: string
  firstName: string
  lastName:string
  email: string
  phone: string
  about: string
  adress: string
  birthday: Date,
  CV: string
}

const initialState: State = {
  profilImage: "https://yt3.ggpht.com/a-/ACSszfFP-lJsbdTN8Xt9z8chBmUa_FKaA-6lopKoMw=s900-mo-c-c0xffffffff-rj-k-no",
  firstName: "Dragos",
  lastName:"Cojanu",
  email: "dragoscojanu97@yahoo.ro",
  phone: "0747459142",
  about: "Building a website is, in many ways, an exercise of willpower. It’s tempting to get distracted by the bells and whistles of the design process, and forget all about creating compelling content.",
  adress: "str. Principala, nr. 211",
  birthday: new Date('10/25/1997'),
  CV: "https://firebasestorage.googleapis.com/v0/b/reactdb-5d0b2.appspot.com/o/Requirement.pdf?alt=media&token=830f9b8f-6836-46dc-b0ed-cd6bd55f3035"
}


@inject("userStore")
@observer
export class AccountProfile extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
    // if (this.props.userStore.user == undefined) {
    //   this.props.userStore.loadUserFromLocalStorage();
    // }
  }

  render() {
    const { user } = this.props.userStore;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard style = {{ marginTop: "3rem" }}>
              <MDBCardHeader>
                <MDBRow>
                  <MDBCol md = "4">
                    <img src={this.state.profilImage} className="img-fluid z-depth-1 rounded-circle" height = "200px" width = "200px" /> 
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
              
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md = "1"/>
                    <MDBCol>
                    <h1 className="text-left">About </h1>
                    <hr/>
                      <dl className="row">
                        <dt className="col-sm-4 text-left">Last name</dt>
                        <dd className="col-sm-2"/>
                        <dd className="col-sm-6">
                          <input type="text" className="form-control" value={this.state.lastName} disabled/>
                        </dd>

                        <dt className="col-sm-4 text-left">First name</dt>
                        <dd className="col-sm-2"/>
                        <dd className="col-sm-6">
                          <input type="text" className="form-control" value={this.state.firstName} disabled/>
                        </dd>

                        <dt className="col-sm-4 text-left">eMail</dt>
                        <dd className="col-sm-2"/>
                        <dd className="col-sm-6">
                          <input type="text" className="form-control" value={this.state.email} disabled/>
                        </dd>

                        <dt className="col-sm-4 text-left">Phone number</dt>
                        <dd className="col-sm-2"/>
                        <dd className="col-sm-6">
                          <input type="text" className="form-control" value={this.state.phone} disabled/>
                        </dd>

                        <dt className="col-sm-4 text-left">Adresa</dt>
                        <dd className="col-sm-2"/>
                        <dd className="col-sm-6">
                          <input type="text" className="form-control" value={this.state.adress} disabled/>
                        </dd>

                        <dt className="col-sm-4 text-left">Data nasterii</dt>
                        <dd className="col-sm-2"/>
                        <dd className="col-sm-6">
                          <input type="datetime" className="form-control" value={this.state.birthday.toDateString()} disabled/>
                        </dd>

                        <dt className="col-sm-4 text-left">CV-ul meu</dt>
                        <dd className="col-sm-2"/>
                        <dd className="col-sm-6">
                        <a href = {this.state.CV} download>
                          <MDBBtn
                            color = "light-blue"
                            className = "mb-2"
                            type = "submit"
                            size = "sm"
                          >
                            <MDBIcon icon="download" className="ml-1" /> Descarca CV-ul
                          </MDBBtn>
                        </a>
                        
                        </dd>
                      </dl>
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
}
