import { Route, Switch } from 'react-router-dom';
import AuthView from './Auth';
import SignupRoutes from './Signup';
import LoginRoutes from './Login';
import RecoveryRoutes from './Recovery';

/**
 * Routes for "Auth" flow
 * url: /auth/*
 */
const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/auth/signup">
        <SignupRoutes />
      </Route>
      <Route path="/auth/login">
        <LoginRoutes />
      </Route>
      <Route path="/auth/recovery">
        <RecoveryRoutes />
      </Route>
      <Route>
        <AuthView />
      </Route>
    </Switch>
  );
};

export default AuthRoutes;
