import React, { Component } from 'react';

/**
 * Error boundary wrapper to save entire Application from falling
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
    this.styleDetails = { whiteSpace: 'pre-wrap' };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // We can also log error messages to an error reporting service here
  }

  render() {
    const { errorInfo } = this.state;
    if (errorInfo) {
      // Error path
      const { error } = this.state;
      return (
        <div>
          <h2>Error Boundary - Something went wrong</h2>
          <details style={this.styleDetails}>
            {error ? error.toString() : null}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
