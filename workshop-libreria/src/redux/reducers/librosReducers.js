import { typesLibros } from "../types/types";

const initialState = {
  libros: [],
};

export const librosReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesLibros.add:
      return {
        libros: [action.payload],
      };

    case typesLibros.list:
      return {
        libros: [...action.payload],
      };
    case typesLibros.edit:
      return {
        ...state,
      };
    case typesLibros.delete:
      return {
        libros: state.libros.filter((t) => t.id !== action.payload),
      };

    default:
      return state;
  }
};
