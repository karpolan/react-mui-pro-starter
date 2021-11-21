import { Route, Switch } from 'react-router-dom';
import LoginEmailView from './Email';

/**
 * Routes for "Login" flow
 * url: /auth/login/*
 */
const LoginRoutes = () => {
  return (
    <Switch>
      <Route path="/auth/login/email">
        <LoginEmailView />
      </Route>
      <Route>
        <LoginEmailView />
      </Route>
    </Switch>
  );
};

export default LoginRoutes;
