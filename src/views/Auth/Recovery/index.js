import { Route, Routes } from 'react-router-dom';
import RecoveryPasswordView from './Password';

/**
 * Routes for "Recovery" flow
 * url: /auth/recovery/*
 */
const RecoveryRoutes = () => {
  return (
    <Routes>
      <Route path="/password" element={<RecoveryPasswordView />} />
      <Route path="*" element={<RecoveryPasswordView />} />
    </Routes>
  );
};

export default RecoveryRoutes;
