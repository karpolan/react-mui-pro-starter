import { Route, Routes } from 'react-router-dom';
import AboutView from './About';

/**
 * Routes for "About" view
 * url: /about/*
 */
const AboutRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<AboutView />} />
    </Routes>
  );
};

export default AboutRoutes;
