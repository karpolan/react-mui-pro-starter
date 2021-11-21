import { Route, Routes } from 'react-router-dom';
import LoginEmailView from './Email';

/**
 * Routes for "Login" flow
 * url: /auth/login/*
 */
const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/login/email">
        <LoginEmailView />
      </Route>
      <Route>
        <LoginEmailView />
      </Route>
    </Routes>
  );
};

export default LoginRoutes;
