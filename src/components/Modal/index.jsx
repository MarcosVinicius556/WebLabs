import { Button, Modal } from "react-bootstrap";
import { memo } from "react";

const StandardModal = memo(({ title, message, hideModal }) => {
    return (
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {title && (<p> {title} </p>) }
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {message && (<p> {message} </p>) }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={hideModal}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      );
});

export default StandardModal;