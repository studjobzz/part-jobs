import * as React from "react";
import { observer, inject } from "mobx-react";
import { JobViewModel, JobInputModel } from "src/view-models/job";
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
import { ListsStore } from "src/store/lists-store";

interface Props {
  jobSelected: JobViewModel;
  listsStore: ListsStore;
}

interface State {}

interface Props {}
interface State {
  access: string;
  activeJob: JobInputModel;
}

const initialJob: JobInputModel = {
  title: "",
  description: "",
  image: new File([], ""),
  validated: true,
  user: "http://localhost:8000/api/users/1/"
};
// favorite: [],
// name: "",
// summary: "",
// servings: 0,
// prepTime: 0,
// cookTime: 0,
// favourite: false,
// difficulty: "",
// category: [],
// rating: 0,
// recipesMediaFiles: []
const initialAcces = localStorage.getItem("logged") || "";

@inject("listsStore")
@observer
export class JobForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { activeJob: initialJob, access: initialAcces };
  }

  handleChangePkId(event) {
    this.setState({
      activeJob: { ...this.state.activeJob, pk: event.target.value }
    });
  }

  handleChangeTitle(event) {
    this.setState({
      activeJob: { ...this.state.activeJob, title: event.target.value }
    });
  }

  handleChangeDescription(event) {
    this.setState({
      activeJob: { ...this.state.activeJob, description: event.target.value }
    });
  }

  handleClick() {
    debugger;
    this.props.listsStore.addOrUpdateJob(
      this.state.activeJob,
      this.state.access
    );
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3" />
          <MDBCol md="6">
            <MDBCard style={{ marginTop: "5rem" }}>
              <MDBCardBody className="mx-4">
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">Register your job</h3>
                </MDBCardHeader>
                <form>
                  <div className="text-left gray-text">
                    <MDBInput
                      label="Job title"
                      size="lg"
                      icon="tag"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.handleChangeTitle.bind(this)}
                    />

                    <MDBInput
                      label="City"
                      size="lg"
                      icon="home"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      // onChange={this.handleChangeImage.bind(this)}
                    />

                    <MDBInput
                      type="textarea"
                      rows="6"
                      label="Describe job/company"
                      icon="pencil"
                      onChange={this.handleChangeDescription.bind(this)}
                    />

                    <div className="text-center mt-4">
                      <MDBBtn
                        color="light-blue"
                        className="mb-3"
                        type="submit"
                        size="lg"
                        onClick={this.handleClick.bind(this)}
                      >
                        Submit <MDBIcon icon="paper-plane-o" className="ml-1" />
                      </MDBBtn>
                    </div>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="3" />
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default JobForm;
