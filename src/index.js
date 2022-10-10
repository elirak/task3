/* eslint-disable linebreak-style */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reducers from "./reducers";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById("root"));
// middleware
const store = createStore(reducers, applyMiddleware(thunk));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
