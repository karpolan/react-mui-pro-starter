import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logLevel from './utils/log';

// Make LogLevel globally accessible as log.info(), log.warn(), log.error(), etc.
global.log = logLevel;
log.info('App started :)');

// Inject React App component into DOM element with id="root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
