import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import lengthReducer from './components/store/reducerLength';
import App from "/src/components/App";
import thunk from "redux-thunk";

let devTools = (f) => f;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const store = createStore(lengthReducer, compose(applyMiddleware(thunk), devTools));

ReactDOM.render( 
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById("root")
);
