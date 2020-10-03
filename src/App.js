import React, {Component} from 'react';
import axios from 'axios';
import log from './utils/log';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import AppIdleTimer from './components/AppIdleTimer';
import {ErrorBoundary} from './components';
import {AppSnackBarProvider} from './components/AppSnackBar';
import {Login, Main} from './views';
import {getMe, setGlobalApi} from './api';
import theme from './theme';

/**
 * Entry point of the Application
 * Configures Axios object to use as shared API across the app, see './api/index.js'
 * Renders "Login" or "Main" view depending on presence of "token" value in local store
 * Contains "token" and "currentUser" stores
 * Provides onLogout() and onSetToken() callbacks
 * Adds IdleTimer, Material UI Theme and SnackBars providers, wraps entire app into ErrorBoundary
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      currentUser: {},
    };
    this.api = axios.create({
      // Use Local storage to override API base path
      baseURL: `${localStorage.getItem('REACT_APP_API_URL') || process.env.REACT_APP_API_URL}/`,
    });
    this.api.interceptors.response.use(
      (res) => res,
      (err) => {
        if (Number(err?.response?.status) === 401) {
          // Token expired, or hacked
          this.setToken(null);
        }
        return Promise.reject(err);
      }
    );
    setGlobalApi(this.api); // Set shared API instance
    this.refIdleTimer = null;
  }

  componentDidMount() {
    this.setToken(localStorage.getItem('token') || null);
  }

  setToken(token) {
    if (token) {
      localStorage.setItem('token', token);
      if (this.api) {
        this.api.defaults.headers['x-auth-token'] = token;
        this.loadCurrentUser(); // Asynchronously update this.state.currentUser from API
      }
    } else {
      if (this.api?.defaults?.token) delete this.api.defaults.token['x-auth-token'];
      localStorage.removeItem('token');
    }
    this.setState({token});
  }

  async loadCurrentUser() {
    const currentUser = await getMe();
    this.setState({currentUser});
  }

  onSetToken = (newToken) => {
    log.warn(`App.onSetToken(${newToken})`);
    this.setToken(newToken);
  };

  onLogout = () => {
    this.setToken(null);
  };

  render() {
    const {token, currentUser} = this.state;
    return (
      <ErrorBoundary>
        <AppIdleTimer onLogout={this.onLogout} />
        {token ? (
          <ThemeProvider theme={theme}>
            <CssBaseline /* Material UI Styles */ />
            <AppSnackBarProvider>
              <Main currentUser={currentUser} onLogout={this.onLogout} />
            </AppSnackBarProvider>
          </ThemeProvider>
        ) : (
          <Login onSetToken={this.onSetToken} /* Non-Material UI part of application */ />
        )}
      </ErrorBoundary>
    );
  }
}

export default App;
