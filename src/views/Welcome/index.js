import { Route, Switch } from 'react-router-dom';
import WelcomeView from './Welcome';

/**
 * Routes for "Welcome" view
 * url: / || /welcome/*
 */
const WelcomeRoutes = () => {
  return (
    <Switch>
      <Route component={WelcomeView} />
    </Switch>
  );
};

export default WelcomeRoutes;
