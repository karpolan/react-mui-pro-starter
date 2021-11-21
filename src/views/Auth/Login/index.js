import { Route, Routes } from 'react-router-dom';
import LoginEmailView from './Email';

/**
 * Routes for "Login" flow
 * url: /auth/login/*
 */
const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/email" element={<LoginEmailView />} />
      <Route path="*" element={<LoginEmailView />} />
    </Routes>
  );
};

export default LoginRoutes;
