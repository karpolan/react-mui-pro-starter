import { useEffect } from 'react';
import { useAppStore } from '../store';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { api } from '../api';
import { isUserStillLoggedIn } from '../api/auth/utils';

/**
 * Renders routes depending Logged or Anonymous users
 */
const AllRoutes = () => {
  const [state, dispatch] = useAppStore();

  useEffect(() => {
    // Check isn't token expired?
    const isLogged = isUserStillLoggedIn();

    if (state.isAuthenticated && !isLogged) {
      // Token was expired, logout immediately!
      console.warn('Token was expired, logout immediately!');
      api?.auth?.logout();
      dispatch({ type: 'LOG_OUT' }); // Maybe not need due to reloading App in api.auth.logout()
      return; // Thats all for now, the App will be completely re-rendered soon
    }

    if (isLogged && !state.isAuthenticated) {
      // Valid token is present but we are not logged in somehow, lets fix it
      dispatch({ type: 'LOG_IN' });
    }
  }, [state.isAuthenticated, dispatch]); // Effect for every state.isAuthenticated change actually

  log.info('AllRoutes() - isAuthenticated:', state.isAuthenticated);
  return state.isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
};

export default AllRoutes;
