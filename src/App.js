import React, {Component} from 'react';
import axios from 'axios';
import AppIdleTimer from './components/AppIdleTimer';
import {Login, Main} from './views';
import {getMe, setGlobalApi} from './api';
import AppStore from './store/AppStore';
import AppThemeProvider from './theme';

/**
 * Entry point of the Application
 * Configures Axios object to use as shared API across the app, see './api/index.js'
 * Renders "Login" or "Main" view depending on presence of "token" value in local store
 * Contains "token" and "currentUser" states
 * Provides onLogout() and onSetToken() callbacks
 * Adds Material UI provider with Light/Dark themes
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      currentUser: {},
    };

    // Create and configure API
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
      <AppStore>
        <AppIdleTimer onLogout={this.onLogout} />
        {token ? (
          <AppThemeProvider /* Material UI part of application */>
            <Main currentUser={currentUser} onLogout={this.onLogout} />
          </AppThemeProvider>
        ) : (
          <Login onSetToken={this.onSetToken} /* Non-Material UI part of application */ />
        )}
      </AppStore>
    );
  }
}

export default App;
