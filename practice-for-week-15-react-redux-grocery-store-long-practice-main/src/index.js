import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { populateProduce } from "./store/produce"
import { addProduce } from './store/cart';

const store = configureStore({}) /// can initalize first state of store here or in the params with predefinedStore = {} 

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
  window.addProduce = addProduce;
}
