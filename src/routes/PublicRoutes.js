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
        <Route path="/" exact>
          <LoginEmailView />
        </Route>
        <Route path="/auth">
          <AuthRoutes />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
