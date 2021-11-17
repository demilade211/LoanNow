import React from 'react';
import {positions,transitions,Provider as AlertProvider} from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import ReactDOM from 'react-dom';
import './globals.css';
import { Provider } from 'react-redux';
import App from './App';
import reduxStore from "./store"

ReactDOM.render(
  <Provider store={reduxStore}>
      <AlertProvider template={AlertTemplate} timeout= {5000} position={positions.TOP_CENTER} transition={transitions.SCALE}>
        <App />
      </AlertProvider>
  </Provider>,
  document.getElementById('root'),
);
