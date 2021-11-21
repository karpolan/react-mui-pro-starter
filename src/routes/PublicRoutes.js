import { Route, Routes } from 'react-router-dom';
import AuthRoutes from '../views/Auth';
import { About, NotFound } from '../views';
import { PublicLayout } from './Layout';
import LoginEmailView from '../views/Auth/Login/Email';

/**
 * List of routes available only for anonymous users
 * Also renders the "Public Layout" composition
 * @component PublicRoutes
 */
const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<LoginEmailView />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/about/*" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
