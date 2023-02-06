import { useState } from "react";

import styled from "styled-components";

import Lottie from "lottie-react";
import clown from "../assets/gifs/clown.json";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactModal = ({ open, setOpenModal }) => {
  const [mensagem, setMensagem] = useState("vazia");
  const [showGif, setShowGif] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;

    setMensagem(value);
  };

  const handleSendMessage = () => {;
    setShowGif(true);
  };

  return (
    <Modal
      show={open}
      onHide={() => {
        setOpenModal(false);
        setShowGif(false);
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {showGif ? "Obrigado pela mensagem!" : "Deixe seu recado aqui:"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!showGif && (
          <>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>

            <h4>Apenas um experimento rs</h4>

            <Form>
              <Form.Label>Escreva sua mensagem aqui</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Pode ser qualquer coisa"
                name="mensagem"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Send your message I am just testing the backend
              </Form.Text>
            </Form>
          </>
        )}

        <Palhaco ativo={showGif}>
          <h5>
            Ainda não implementei um backend então sua mensagem não vai chegar
            :/
            <br /> Mas se quiser falar comigo é só mandar mensagem no instagram
            @felipsteles ;)
          </h5>
          <Lottie animationData={clown} />
        </Palhaco>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={handleSendMessage}
          disabled={showGif}
        >
          Mandar mensagem
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setOpenModal(false);
            setShowGif(false);
          }}
        >
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const Palhaco = styled.div`
  display: ${(props) => (props.ativo ? "block" : "none")};
`;

export default ContactModal;
