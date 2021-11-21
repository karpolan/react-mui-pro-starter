import { Route, Switch } from 'react-router-dom';
import RecoveryPasswordView from './Password';

/**
 * Routes for "Recovery" flow
 * url: /auth/recovery/*
 */
const RecoveryRoutes = () => {
  return (
    <Switch>
      <Route path="/auth/recovery/password">
        <RecoveryPasswordView />
      </Route>
      <Route>
        <RecoveryPasswordView />
      </Route>
    </Switch>
  );
};

export default RecoveryRoutes;
