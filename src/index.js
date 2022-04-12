import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";

import store from './app/store'
import 'antd/dist/antd.css'

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
