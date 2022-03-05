import { Modal } from "bootstrap";
import { Button } from "bootstrap";
import React from "react";
import { Form } from "react-bootstrap";

const Editar = () => {
  return (
    <div>
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Editar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre de la Tarea</Form.Label>
              <Form.Control
                type="text"
                name="tarea"
                placeholder="Ingrese nombre tarea"
              />
            </Form.Group>

            <Button variant="secondary">Close</Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Editar;
