import * as React from "react";
import { observer, inject } from "mobx-react";
import { JobViewModel } from "src/view-models/job";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBInput,
  MDBBtn,
  MDBIcon
} from "mdbreact";

interface Props {
  jobSelected: JobViewModel;
}

interface State {}

const states = [
  "Alba",
  "Arad",
  "Arges",
  "Bacau",
  "Bihor",
  "Bistrita Nasaud",
  "Botosani",
  "Braila",
  "Brasov",
  "Bucuresti",
  "Buzau",
  "Calarasi",
  "Caras Severin",
  "Cluj",
  "Constanta",
  "Covasna",
  "Dambovita",
  "Dolj",
  "Galati",
  "Giurgiu",
  "Gorj",
  "Harghita",
  "Hunedoara",
  "Ialomita",
  "Iasi",
  "Ilfov",
  "Maramures",
  "Mehedinti",
  "Mures",
  "Neamt",
  "Olt",
  "Prahova",
  "Salaj",
  "Satu Mare",
  "Sibiu",
  "Suceava",
  "Teleorman",
  "Timis",
  "Tulcea",
  "Valcea",
  "Vaslui",
  "Vrancea"
]

@observer
export class JobForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
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
                            Register your job
                        </h3>
                    </MDBCardHeader>
                    <form>
                      <div className="text-left gray-text">
                        <MDBInput
                          label = "Job title"
                          size = "lg"
                          icon ="tag"
                          group
                          type = "text"
                          validate
                          error = "wrong"
                          success = "right"
                        />

                        <MDBInput
                          label = "City"
                          size = "lg"
                          icon ="home"
                          group
                          type = "text"
                          validate
                          error = "wrong"
                          success = "right"
                        />

                        <MDBInput
                          type="textarea"
                          rows="6"
                          label="Describe job/company"
                          icon="pencil"
                        />

                        <div className="text-center mt-4">
                        <MDBBtn
                          color = "light-blue"
                          className = "mb-3"
                          type = "submit"
                          size = "lg"
                        >
                          Submit <MDBIcon icon="paper-plane-o" className="ml-1" />
                        </MDBBtn>
                      </div>
                    </div>
                  </form>
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
