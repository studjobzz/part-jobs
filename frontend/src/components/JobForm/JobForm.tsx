import * as React from "react";
import { observer, inject } from "mobx-react";
import { JobViewModel } from "src/view-models/job";
import { UserViewModel } from "src/view-models/UserViewModel";
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
  MDBModalFooter
} from "mdbreact";

interface Props {
  jobSelected: JobViewModel;
  userLogged: UserViewModel;
}

interface State {
  title: string,
  city: string
  description: string
}

const initialState: State = {
  title: "",
  city: "",
  description: ""
}



@observer
export class JobForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }
  handleChangeCity(event) {
    this.setState({city : event.target.value});
  }
  handleChangeDescription(event) {
    this.setState({description : event.target.value});
  }


  render() {
    return(
      
      <MDBContainer>
          <MDBRow>
            <MDBCol md = "3"/>
            <MDBCol md= "6" >
              <MDBCard style = {{marginTop: "5rem"}} >
                <MDBCardBody className="mx-4">
                    <MDBCardHeader className = "form-header deep-blue-gradient rounded">
                        <h3 className="my-3">
                            Adauga un job
                        </h3>
                    </MDBCardHeader>
                    <form>
                      <div className="text-left gray-text">
                        <MDBInput
                          label = "Nume job"
                          size = "lg"
                          icon ="tag"
                          group
                          type = "text"
                          validate
                          error = "wrong"
                          success = "right"
                          onChange={ this.handleChangeTitle.bind(this) }
                        />

                        <MDBInput
                          label = "Oras"
                          size = "lg"
                          icon ="home"
                          group
                          type = "text"
                          validate
                          error = "wrong"
                          success = "right"
                          onChange={ this.handleChangeCity.bind(this) }
                        />

                        <MDBInput
                          type="textarea"
                          rows="6"
                          label="Descrieti jobul/compania"
                          icon="pencil"
                          onChange={ this.handleChangeDescription.bind(this) }
                        />

                        <div className="text-center mt-4">
                        <MDBBtn
                          color = "light-blue"
                          className = "mb-3"
                          type = "submit"
                          size = "lg"
                        >
                          Adauga <MDBIcon icon="paper-plane-o" className="ml-1" />
                        </MDBBtn>
                      </div>
                    </div>
                  </form>

                  <MDBModalFooter>
                    <div className="font-weight-light">
                      <p> Va rugam nu adaugati un job inexistent. Va vom bloca posibilitatea de a accesa acest site.</p>
                      <p> Multumim!</p>
                    </div>
                  </MDBModalFooter>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md = "3"/>
          </MDBRow>
      </MDBContainer>
  )
  }
}

export default JobForm;
