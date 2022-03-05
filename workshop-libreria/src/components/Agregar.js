import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import Listar from "./Listar";

const Agregar = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      url: "",
      nombre: "",
      autor: "",
      genero: "",
    },
  });

  return (
    <div>
      <div className="container mt-5">
        <hr />
        <div className="row">
          <div className="col-9">
            <h3 className="text-center"> Libros </h3>

            <form className="form-group" onSubmit={formik.handleSubmit}>
              <input
                id="fileSelector"
                type="file"
                className="form-control "
                placeholder="url"
                name="url imagen"
                style={{ display: "none" }}
                required
              />

              <button className="btn btn-dark" type="button">
                Imagen
              </button>

              <input
                type="text"
                className="form-control mt-2"
                name="nombre"
                autoComplete="off"
                placeholder="Nombre del libro"
                required
              />

              <input
                type="text"
                className="form-control mt-2"
                name="autor"
                autoComplete="off"
                placeholder="autor"
                required
              />

              <textarea
                className="form-control mt-2"
                autoComplete="off"
                name="genero"
                placeholder="genero"
                required
              ></textarea>

              <div className="d-grid gap-2 mx-auto mt-2">
                <input
                  value="Save"
                  type="submit"
                  className="btn btn-outline-dark"
                />
              </div>
            </form>
          </div>
          <Listar />
        </div>
      </div>
    </div>
  );
};

export default Agregar;
