import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FileUpload } from "../helpers/FileUpload";
import {
  agregarLibroAsync,
  listLibrosAsync,
} from "../redux/actions/actionLibros";
import Listar from "./Listar";

const Agregar = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      imagen: "",
      nombre: "",
      autor: "",
      genero: "",
    },
    onSubmit: (data) => {
      dispatch(agregarLibroAsync(data));
    },
  });

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChanged = (e) => {
    const file = e.target.files[0];
    FileUpload(file)
      .then((response) => {
        formik.initialValues.imagen = response;
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    dispatch(listLibrosAsync());
  }, [dispatch]);

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
                placeholder="imagen"
                name="url imagen"
                style={{ display: "none" }}
                onChange={handleFileChanged}
                required
              />

              <button
                className="btn btn-dark"
                type="button"
                onClick={handlePictureClick}
              >
                Imagen
              </button>

              <input
                type="text"
                className="form-control mt-2"
                name="nombre"
                autoComplete="off"
                placeholder="Nombre del libro"
                onChange={formik.handleChange}
                required
              />

              <input
                type="text"
                className="form-control mt-2"
                name="autor"
                autoComplete="off"
                placeholder="autor"
                onChange={formik.handleChange}
                required
              />

              <textarea
                className="form-control mt-2"
                autoComplete="off"
                name="genero"
                placeholder="genero"
                onChange={formik.handleChange}
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
