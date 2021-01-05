import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IdleTimer from 'react-idle-timer';

/**
 * WatchDog timer to track inactivity and logout current user
 * @param {func} [onLogout] - callback to logout current user
 */
class AppIdleTimer extends Component {
  constructor(props) {
    super(props);
    this.refIdleTimer = null;
  }

  doLogout() {
    const { onLogout } = this.props;
    if (onLogout && typeof onLogout === 'function') {
      onLogout();
    }
  }

  onUserIdle = (event) => {
    log.warn('User is idle for long time...');
    this.doLogout();
  };

  onUserAction(event) {
    log.warn('User action detected, idle timer reset');
    this.refIdleTimer.reset();
  }

  onUserActiveAgain(event) {
    log.warn('User is active again, time remaining:', this?.refIdleTimer?.getRemainingTime());
  }

  render() {
    return (
      <IdleTimer
        ref={(ref) => {
          this.refIdleTimer = ref;
        }}
        timeout={1000 * 60 * 60 * 3} // Idle timeout in 3 hours
        debounce={1000 * 30} // Check User activity every 30 seconds
        // timeout={1000 * 10} // Idle timeout in 10 seconds (debug)
        // debounce={1000 * 3} // Check User activity every 3 seconds (debug)
        onIdle={this.onUserIdle.bind(this)}
        onAction={this.onUserAction.bind(this)}
        onActive={this.onUserActiveAgain.bind(this)}
      />
    );
  }
}

AppIdleTimer.propTypes = {
  onLogout: PropTypes.func,
};

export default AppIdleTimer;
