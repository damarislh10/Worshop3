import { typesLibros } from "../types/types";
import { db } from "../../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const editAsync = (id, contentTodo) => {
  return async (dispatch) => {
    updateDoc(doc(db, "libros", id), contentTodo);
    dispatch(editSyn(contentTodo));
    dispatch(listLibrosAsync());
  };
};
// edit sync-------

export const editSyn = (contentTodo) => {
  return {
    type: typesLibros.edit,
    payload: contentTodo,
  };
};

// Eliminar asyncronico

export const deleteLibroAsync = (id) => {
  return async (dispatch) => {
    deleteDoc(doc(db, "libros", id));
    dispatch(deleteSincronico(id));
    dispatch(listLibrosAsync());
  };
};

export const deleteSincronico = (id) => {
  return {
    type: typesLibros.delete,
    payload: id,
  };
};
// Listar asyncronico -------------

export const listLibrosAsync = () => {
  return async (dispatch) => {
    const datos = await getDocs(collection(db, "libros"));
    const libros = [];
    datos.forEach((doc) => {
      let data = doc.data();
      data["id"] = doc.id;
      libros.push({
        ...data,
      });
    });
    dispatch(listSync(libros));
  };
};
// ---- listar --------------------

export const listSync = (libros) => {
  return {
    type: typesLibros.list,
    payload: libros,
  };
};

// agregar --------
export const agregarLibroAsync = (newLibro) => {
  return (dispatch) => {
    addDoc(collection(db, "libros"), newLibro)
      .then((resp) => {
        console.log(resp);
        dispatch(agregarLibroSync(newLibro));
        dispatch(listLibrosAsync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const agregarLibroSync = (libro) => {
  return {
    type: typesLibros.add,
    payload: libro,
  };
};
