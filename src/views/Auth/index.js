import { Route, Routes } from 'react-router-dom';
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
    <Routes>
      <Route path="/signup/*" element={<SignupRoutes />} />
      <Route path="/login/*" element={<LoginRoutes />} />
      <Route path="/recovery/*" element={<RecoveryRoutes />} />
      <Route path="*" element={<AuthView />} />
    </Routes>
  );
};

export default AuthRoutes;
