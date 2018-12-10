import * as React from "react";
import {
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Row,
  Col,
  Fa
} from "mdbreact";
import { JobViewModel } from "src/view-models/job";

interface Props {
  job: JobViewModel;
  index: number;
}

interface State {
  // redirectTo: string;
}

export class Job extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <Row>
        <Col style={{ maxWidth: "22rem" }}>
          <Card>
            <CardImage
              top
              src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
              overlay="white-slight"
              hover
              waves
              alt="Card image cap"
            />
            <CardBody className="elegant-color white-text rounded-bottom">
              <a href="#!" className="activator waves-effect waves-light mr-4">
                <Fa icon="share-alt" />
              </a>
              <CardTitle>{this.props.job.name}</CardTitle>
              <hr className="hr-light" />
              <CardText className="white-text">
                {this.props.job.description}
              </CardText>
              <a
                href="/jobs/add"
                className="black-text d-flex justify-content-end"
              >
                <h5 className="white-text">
                  Read more <Fa icon="angle-double-right" />
                </h5>
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Job;
