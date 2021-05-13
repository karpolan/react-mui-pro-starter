import  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AppLink } from '../components';

/**
 * Boilerplate for non-implemented Views
 */
export class NotImplementedView extends Component {
  render() {
    const { name, location, match } = this.props;
    const componentName = name || this.displayName || this._reactInternalFiber.elementType.name || 'View';
    const paramId = match.params?.id;

    return (
      <div>
        <h1>{componentName} is under construction</h1>
        <p>
          This view is not implemented yet. Go to <AppLink to="/">home page</AppLink>
        </p>
        <p>
          You've called the <b>{location?.pathname}</b> url
          {paramId && (
            <span>
              {' '}
              where <b>{paramId}</b> is a parameter
            </span>
          )}
        </p>
      </div>
    );
  }
}

export default withRouter(NotImplementedView);
