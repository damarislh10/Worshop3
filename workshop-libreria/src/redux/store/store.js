import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { librosReducers } from "../reducers/librosReducers";
import { loginReducers } from "../reducers/loginReducers";
import { registroReducers } from "../reducers/registroReducers";


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  login: loginReducers,
  registro: registroReducers,
  libros: librosReducers,

});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
