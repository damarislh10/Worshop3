import React from "react";

const Listar = () => {
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
          {
            <tr>
              <td>
                <img src="" width="50" height="50" alt="" />
              </td>
              <td></td>
              <td></td>
              <td></td>
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
                />
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default Listar;
