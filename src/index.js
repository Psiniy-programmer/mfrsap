import './fonts.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import {BrowserRouter, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import * as serviceWorker from './serviceWorker';
import App from './Components/App/App';

const axios = require('axios');
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware =
    ext && process.env.NODE_ENV === 'development' ? ext() : func => func;
const store = createStore(reducer,
    compose(applyMiddleware(thunk), devtoolMiddleware));
const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Switch>
            <App/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();

String.prototype.replaceAt = function(index, newSymbols) {
  return this.substr(0, index) + newSymbols +
      this.substr(index + newSymbols.length);
};

Date.prototype.getWeek = function() {
  const onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

export {axios, history};