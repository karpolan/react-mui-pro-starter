import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAppStore } from '../store';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { api } from '../api';
import { isUserStillLoggedIn } from '../api/auth/utils';

/**
 * Renders Application routes depending on Logged or Anonymous users
 * @component AppRoutes
 */
const AppRoutes = () => {
  const [state, dispatch] = useAppStore();

  useEffect(() => {
    // Check isn't token expired?
    const isLogged = isUserStillLoggedIn();

    if (state.isAuthenticated && !isLogged) {
      // Token was expired, logout immediately!
      log.warn('Token was expired, logout immediately!');
      api?.auth?.logout();
      // dispatch({ type: 'LOG_OUT' }); // Not needed due to reloading App in api.auth.logout()
      return; // Thats all for now, the App will be completely re-rendered soon
    }

    if (isLogged && !state.isAuthenticated) {
      // Valid token is present but we are not logged in somehow, lets fix it
      log.warn('Token found, lets try to auto login');
      dispatch({ type: 'LOG_IN' });
    }
  }, [state.isAuthenticated, dispatch]); // Effect for every state.isAuthenticated change actually

  log.info('AppRoutes() - isAuthenticated:', state.isAuthenticated);
  return <BrowserRouter>{state.isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}</BrowserRouter>;
};

export default AppRoutes;
