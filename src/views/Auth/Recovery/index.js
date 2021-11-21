import { Route, Routes } from 'react-router-dom';
import RecoveryPasswordView from './Password';

/**
 * Routes for "Recovery" flow
 * url: /auth/recovery/*
 */
const RecoveryRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/recovery/password">
        <RecoveryPasswordView />
      </Route>
      <Route>
        <RecoveryPasswordView />
      </Route>
    </Routes>
  );
};

export default RecoveryRoutes;
