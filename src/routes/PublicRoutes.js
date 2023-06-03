import { Route, Routes } from 'react-router-dom';
import AuthRoutes from '../views/Auth';
import { AboutView, NotFoundView } from '../views';
import LoginEmailView from '../views/Auth/Login/Email';

/**
 * List of routes available only for anonymous users
 * @component PublicRoutes
 */
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginEmailView />} />
      <Route path="auth/*" element={<AuthRoutes />} />
      <Route path="about" element={<AboutView />} />,
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default PublicRoutes;
