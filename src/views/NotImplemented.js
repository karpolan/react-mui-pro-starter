import { useLocation, useParams } from 'react-router-dom';

import { AppLink } from '../components';

/**
 * Boilerplate for non-implemented Views
 */
const NotImplementedView = ({ name }) => {
  const location = useLocation();
  const { id: paramId } = useParams();
  const componentName = name || 'View';

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
};

export default NotImplementedView;
