
import { useLocation } from 'react-router-dom';
import { AppLink } from '../components';

/**
 * NotFound aka 404 page/view
 */
const PageNotFound = () => {
  const location = useLocation();
  return (
    <div>
      <p>
        You've called the <b>{location?.pathname}</b> url that doesn't exist
      </p>
      <p>
        Go to <AppLink to="/">home page</AppLink>
      </p>
    </div>
  );
};

export default PageNotFound;
