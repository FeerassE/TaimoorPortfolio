import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import './styles/index.css';

import reducers from './reducers';


import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducers,
    compose(
      applyMiddleware(promise),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
