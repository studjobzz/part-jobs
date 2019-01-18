import * as React from "react";
import { Col, Row, Container, Button } from "reactstrap";
import "./JobDetails.css";
import { Redirect, Link } from "react-router-dom";
import { ListsStore } from "src/store/lists-store";
import { JobViewModel } from "src/view-models/job";
import { observer, inject } from "mobx-react";

interface Match {
  params: {
    antePage: string;
    id: number;
  };
}

interface Props {
  match: Match;
  listsStore: ListsStore;
}

interface State {
  activeJob: JobViewModel;
}

const initialState: State = {
  activeJob: {
    pk: 0,
    title: "",
    description: "",
    image: "",
    favorite: false,
    idUser: 0,
    listaAplicanti: []
  }
};

@inject("listsStore")
@observer
export class JobDetails extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
    let jobId = props.match.params.id;
    if (jobId) {
      this.props.listsStore.loadActiveJob(jobId, this.loadJob.bind(this));
    }
  }

  private loadJob(job: JobViewModel): void {
    debugger;
    this.setState({
      activeJob: job
    });
  }

  render() {
    return (
      <Container fluid className="jobDetailContainer">
        <Row className="coverRow">
          <Col className="cover">
            <p className="jobName">
              {/* Junior Configuration Specialist */}
              {this.state.activeJob.title}
              <br />{" "}
            </p>
          </Col>{" "}
        </Row>
        <Row className="jobDetailRow">
          <Col
            sm={{
              size: 8,
              order: 2,
              offset: 1
            }}
            className="jobDetail"
          >
            <b>Descrierea job-ului</b>
            <br />
            <br />
            {this.state.activeJob.description}

            {/* As a Junior Configuration Specialist, you will be part of our
            Solutions Delivery team, and your role will be to implement Darwin
            by configuring it to meet our Client specific requirements.
            <br />
            You will go through an intensive training (at the beginning of the
            role) - and after that, you will be able to configure Darwin,
            perform testing of configured functionality and help support post
            launch work for our Clients (Unit Testing, User Acceptance Testing).
            <br />
            You will be closely working with our product Darwin™, a cloud-based
            global benefits management and employee engagement software, used by
            some of the world’s most innovative companies. */}
          </Col>
        </Row>
        <Row>
          <Col
            sm={{
              size: 8,
              order: 2,
              offset: 1
            }}
            className="jobDetail"
          >
            <Button color="info">Aplica pentru acest job</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={"/" + this.props.match.params.antePage}>
              <Button color="secondary">Inapoi</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default JobDetails;
