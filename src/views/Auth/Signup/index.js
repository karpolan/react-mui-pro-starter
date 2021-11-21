import { Route, Routes } from 'react-router-dom';
import SignupView from './Signup';
import ConfirmEmailView from './ConfirmEmail';

/**
 * Routes for "Signup" flow
 * url: /auth/signup/*
 */
const SignupRoutes = () => {
  return (
    <Routes>
      <Route path="/confirm-email" element={<ConfirmEmailView />} />
      <Route path="*" element={<SignupView />} />
    </Routes>
  );
};

export default SignupRoutes;
