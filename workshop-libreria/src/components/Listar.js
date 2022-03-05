import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLibroAsync } from "../redux/actions/actionLibros";
import Editar from "./Editar";

const Listar = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [enviarDatosModal, setEnviarDatosModal] = useState([]);

  const { libros } = useSelector((store) => store.libros);
  const editar = (id) => {
    const traerElLibro = libros.find((t) => t.id === id);
    console.log(traerElLibro)
    setModal(true);
    
    setEnviarDatosModal(traerElLibro);
  };

  return (
    <div>
      <table className="table text-center mt-3">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Nombre Libro</th>
            <th scope="col">Autor</th>
            <th scope="col">Genero</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {libros.map((l, i) => (
            <tr key={i}>
              <td>
                <img src={l.imagen} width="50" height="50" alt="" />
              </td>
              <td>{l.nombre}</td>
              <td>{l.autor}</td>
              <td>{l.genero}</td>
              <td>
                <input
                  value="Actualizar"
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => editar(l.id)}
                />
                <input
                  value="Eliminar"
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => dispatch(deleteLibroAsync(l.id))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modal === true ? <Editar modal={enviarDatosModal} /> : ""}
    </div>
  );
};

export default Listar;
