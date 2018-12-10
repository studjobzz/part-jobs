import * as React from "react";

import {
  Container,
  Row,
  Col,
  Input,
  Button,
  Fa,
  Card,
  CardBody
} from "mdbreact";

export class Login extends React.Component {
  render() {
    return (
      <div id="login" className="container-fluid">
        <Container>
          <Row>
            <Col md="4">
              <Card>
                <CardBody>
                  <form>
                    <p className="h4 text-center py-4">Login</p>
                    <div className="grey-text">
                      <Input
                        label="Your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <Input
                        label="Your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <Button color="cyan" type="submit">
                        Login
                      </Button>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
