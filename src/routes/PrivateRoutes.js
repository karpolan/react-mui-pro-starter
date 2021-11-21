import { Route, Routes } from 'react-router-dom';
import { Welcome, About, Tools, User, NotFound } from '../views';
import { PrivateLayout } from './Layout';

/**
 * List of routes available only for authenticated users
 * Also renders the "Private Layout" composition
 * @component PrivateRoutes
 */
const PrivateRoutes = () => {
  return (
    <PrivateLayout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome/*" element={<Welcome />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/tools/*" element={<Tools />} />
        <Route path="/user/*" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PrivateLayout>
  );
};

export default PrivateRoutes;
