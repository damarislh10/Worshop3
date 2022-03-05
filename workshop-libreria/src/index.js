import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from '../src/routers/AppRouters'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

ReactDOM.render(
  <Provider store={store}>
    <AppRouters/>
  </Provider>,
  document.getElementById('root')
);


