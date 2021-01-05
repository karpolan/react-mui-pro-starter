/**
 * Note: Don't import/export all Views directly, use lazy loading!
 */
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withSuspense } from '../components';
import NotFound from './NotFound';
import NotImplementedView from './NotImplemented';

/**
 * Views/Pages with Lazy Loading
 */
const Login = withSuspense(
  React.lazy(() => import('./Login')),
  <div>Loading...</div> // Non-Material UI "progress" :)
);
const Main = withSuspense(
  React.lazy(() => import('./Main')),
  <LinearProgress />
);
const Welcome = withSuspense(React.lazy(() => import('./Welcome')));
const About = withSuspense(React.lazy(() => import('./About')));
const Tools = () => <NotImplementedView name="Tools" />; // Sample of non-implemented View
const Settings = () => <NotImplementedView name="Settings" />; // Sample of non-implemented View

export { NotFound, Login, Main, About, Welcome, Settings, Tools };
