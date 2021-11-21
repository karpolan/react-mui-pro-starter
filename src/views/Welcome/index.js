import { Route, Routes } from 'react-router-dom';
import WelcomeView from './Welcome';

/**
 * Routes for "Welcome" view
 * url: / || /welcome/*
 */
const WelcomeRoutes = () => {
  return (
    <Routes>
      <Route>
        <WelcomeView />
      </Route>
    </Routes>
  );
};

export default WelcomeRoutes;
