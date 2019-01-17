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
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBAvatar,
  MDBCardUp
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
}

const initialState: State = {
  profilImage: "https://yt3.ggpht.com/a-/ACSszfFP-lJsbdTN8Xt9z8chBmUa_FKaA-6lopKoMw=s900-mo-c-c0xffffffff-rj-k-no",
  firstName: "Dragos",
  lastName:"Cojanu",
  email: "dragoscojanu97@yahoo.ro",
  phone: "0747459142",
  about: "Building a website is, in many ways, an exercise of willpower. It’s tempting to get distracted by the bells and whistles of the design process, and forget all about creating compelling content."
}


@inject("userStore")
@observer
export class AccountDetailsView extends React.Component<Props, State> {
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
            <MDBCard style = {{ marginTop: "1rem" }}>
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
                  {/* <MDBRow>
                    <MDBCol md = "2"/>
                    <MDBCol>
                      <MDBRow>
                        <MDBCol>
                          Last name
                        </MDBCol>
                        <MDBCol>
                          <input type="text" className="form-control" value={this.state.lastName} disabled width = "100"/>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md = "4"/>
                  </MDBRow> */}
                  <MDBRow>
                    <MDBCol md = "1"/>
                    <MDBCol>
                    <h1 className="text-left">About </h1>
                    <hr/>
                      <dl className="row">
                        <dt className="col-sm-4 text-left">Last name</dt>
                        <dd className="col-sm-2"/>
                        <dd className="col-sm-4">
                          <input type="text" className="form-control" value={this.state.lastName} disabled/>
                        </dd>
                        <dd className="col-sm-2"/>

                        <dt className="col-sm-4 text-left">First name</dt>
                        <dd className="col-sm-2"/>
                        <dd className="col-sm-4">
                          <input type="text" className="form-control" value={this.state.firstName} disabled/>
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
                        <dd className = "col-md-2 text-left">
                          <a href = "">
                            <MDBIcon icon="wrench" className="ml-1" href=""/>
                          </a>                          
                        </dd>


                        <dt className="col-sm-4 text-left">Phone number</dt>
                        <dd className="col-sm-2"/>
                        <dd className="col-sm-4">
                          <input type="text" className="form-control" placeholder={this.state.phone} disabled/>
                        </dd>
                        <dd className = "col-sm-2"/>

                        <dt className = "col-sm-6"/>
                        <dt className="col-sm-4 text-right">
                          <MDBBtn
                            color = "light-blue"
                            className = "mb-2"
                            type = "submit"
                            size = "sm"
                          >
                            Edit info <MDBIcon icon="info" className="ml-1" />
                          </MDBBtn>
                        </dt>
                        <dt className = "col-sm-2"/>

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
