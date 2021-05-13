import React from 'react';
import ReactDOM from 'react-dom';
import logLevel from './utils/log';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

// Make LogLevel globally accessible as log.info(), log.warn(), log.error(), etc.
// Note: Don't forget to set env.REACT_APP_LOG_LEVEL = DEBUG | INFO | WARN | ERROR
global.log = logLevel; // or: var log = logLevel;
log.info('App started :)');

// Inject React App component into DOM element with id="root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(log.warn);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
