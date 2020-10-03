import React from 'react';
import {Link, useLocation} from 'react-router-dom';

/**
 * NotFound aka 404 page/view
 */
const PageNotFound = () => {
  const location = useLocation();
  return (
    <div>
      <p>
        You've called the <b>{location.pathname}</b> url that doesn't exist
      </p>
      <p>
        Go to <Link to="/">home page</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
