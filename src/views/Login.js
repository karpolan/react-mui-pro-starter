import React, {Component} from 'react';
import PropTypes from 'prop-types';
import log from '../utils/log';
import {TITLE_PUBLIC} from '../consts';
import logoGoogle from './Login/google.svg';

const style = {
  textAlign: 'center',
};

/**
 * Main page for Non-logged User with "Login with Google" button
 * url: /
 */
class Login extends Component {
  state = {
    loading: true,
    inProgress: false,
    error: '',
  };

  componentDidMount() {
    document.title = TITLE_PUBLIC; // Hide real Title from cool-hackers :)
    // Add Google Login API script into the DOM
    const script = document.createElement('script');
    script.id = 'google-login';
    script.src = 'https://apis.google.com/js/client:platform.js';
    script.async = 1;
    script.onload = () =>
      window.gapi.load('auth2', async () => {
        if (!window.gapi.auth2.getAuthInstance()) {
          try {
            await window.gapi.auth2.init({
              client_id: '_YOUR_CLIENT_ID_HERE_.apps.googleusercontent.com',
              scope: 'email',
              ux_mode: 'popup',
              access_type: 'online',
            });
          } catch (error) {
            log.error(error);
          }
        }
        this.setState({loading: false}); // Loading of external scripts complete
      });
    const el = document.getElementsByTagName('script')[0];
    if (el?.parentNode) el.parentNode.insertBefore(script, el);
    else document.head.appendChild(script);
  }

  setToken(newToken) {
    const {onSetToken} = this.props;
    if (onSetToken && typeof onSetToken === 'function') {
      onSetToken(newToken);
    }
  }

  async doLogin() {
    this.setState({inProgress: true, error: ''});
    try {
      const resGoogle = await window.gapi.auth2.getAuthInstance().signIn({});
      const res = await this.props.api.post(
        `${localStorage.getItem('REACT_APP_API_URL') || process.env.REACT_APP_API_URL}/login`, // Todo: Set correct "login" API endpoint
        {google: resGoogle.getAuthResponse().access_token}
      );
      this.setToken(res.data.token);
    } catch (error) {
      this.setState({error: error.message});
      log.error(error);
    } finally {
      this.setState({inProgress: false});
    }
  }

  onLogin = () => {
    this.doLogin();
  };

  render() {
    const {loading, inProgress, error} = this.state;
    return (
      <div style={style}>
        <h1>_TITLE_</h1>
        <p>Material UI is NOT used on this page!</p>
        <p>
          This is just a sample how to use "Login with Google" and split Application routing for "Logged" and
          "Non-authenticated" users
        </p>
        <div>
          <button style={{padding: '0.5rem 0.75rem'}} onClick={this.onLogin} disabled={loading || inProgress}>
            <img src={logoGoogle} width="24" height="24" alt="Google Icon" style={{verticalAlign: 'middle'}} />
            &nbsp;
            <span style={{verticalAlign: 'middle'}}>
              {this.inProgress ? 'Login in progress...' : 'Sign in with Google'}
            </span>
          </button>
          {error ? <div className="error">{error}</div> : null}
        </div>
        <br />
        <div>
          <button style={{padding: '0.5rem 0.75rem'}} onClick={() => this.setToken('_PUT_VALID_TOKEN_HERE_')}>
            Emulate successful login to open main Application >>
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onSetToken: PropTypes.func,
};

Login.defaultProps = {
  onSetToken: (newToken) => log.warn(`Unhandled Login.onSetToken(${newToken})`),
};

export default Login;
