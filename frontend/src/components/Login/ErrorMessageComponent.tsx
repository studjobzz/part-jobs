import * as React from "react";
import { Button } from "react-bootstrap";
import { Container, Modal, ModalBody, ModalHeader } from "mdbreact";

interface Props {
  onButtonClick: Function;
}

interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: true
};

export class TermsModal extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  toggle = () => {
    this.props.onButtonClick();
  };

  render() {
    return (
      <Container>
        <Modal
          size="sm"
          isOpen={this.state.isOpen}
          toggle={() => this.toggle()}
        >
          <ModalHeader
            style={{ color: "red" }}
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={() => this.toggle()}
          >
            <h6>E-mail sau parola incorecte.</h6>
          </ModalHeader>
          <ModalBody>
            <p>Incearca din nou</p>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default TermsModal;
