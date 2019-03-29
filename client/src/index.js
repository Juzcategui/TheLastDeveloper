import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Router } from 'react-router-dom'
import history from '../src/components/Technical/History';

import store from "./config/store";

ReactDOM.render(
  <Provider store={store}>

    <App />

  </Provider>,
  document.getElementById("root")
);
