import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLibroAsync } from "../redux/actions/actionLibros";

const Listar = () => {
  const dispatch = useDispatch();

  const { libros } = useSelector((store) => store.libros);

  console.log(libros);
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
    </div>
  );
};

export default Listar;
