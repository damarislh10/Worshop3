// import { Modal } from "bootstrap";
// import { Button } from "bootstrap";
import React from "react";
// import { Form } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import useForm from "../hooks/useForm";
// import { editAsync } from "../redux/actions/actionLibros";

const Editar = ({ modal }) => {
  // const dispatch = useDispatch();
  // const [show, setShow] = useState(true);
  // const handleClose = () => setShow(false);

  // const [values, handleInputChange, reset] = useForm({
  //   nombre: modal.nombre,
  //   autor: modal.autor,
  //   genero: modal.genero,
  // });
  // const { nombre, autor, genero } = values;
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   dispatch(editAsync(modal.id, values));
  //   reset();
  // };
  return (
    <div>
      <h1>hola</h1>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar libro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre de la Tarea</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                placeholder="Ingrese nombre tarea"
                value={nombre}
                onChange={handleInputChange}
              />
                            <Form.Control
                type="text"
                name="autor"
                placeholder="Ingrese autor"
                value={autor}
                onChange={handleInputChange}
              />
                            <Form.Control
                type="text"
                name="genero"
                placeholder="Ingrese nombre tarea"
                value={genero}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal> */}
    </div>
  );
};

export default Editar;
