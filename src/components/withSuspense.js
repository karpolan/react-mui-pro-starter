import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

// const DefaultFallback = <div>Loading....</div>;
const DefaultFallback = <LinearProgress />;

/**
 * Wraps the React Component with React.Suspense and FallbackComponent while loading.
 * @param {React.Component} WrappedComponent - lazy loading component to wrap.
 * @param {React.Component} FallbackComponent - component to show while the WrappedComponent is loading.
 */
export const withSuspense = (WrappedComponent, FallbackComponent = DefaultFallback) => {
  return class extends React.Component {
    render() {
      return (
        <React.Suspense fallback={FallbackComponent}>
          <WrappedComponent {...this.props} />
        </React.Suspense>
      );
    }
  };
};

export default withSuspense;
