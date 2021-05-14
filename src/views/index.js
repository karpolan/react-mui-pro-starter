import React from 'react';
/**
 * Note: Don't import/export all Views directly, use lazy loading!
 */
import { withSuspense } from '../components';
import NotFound from './NotFound';
import NotImplementedView from './NotImplemented';

/**
 * Views/Pages with Lazy Loading
 */
const Welcome = withSuspense(React.lazy(() => import('./Welcome')));
const About = withSuspense(React.lazy(() => import('./About')));
const Tools = () => <NotImplementedView name="Tools" />; // Sample of non-implemented View
const User = () => <NotImplementedView name="User" />; // Sample of non-implemented View

export { NotFound, About, Welcome, User, Tools };
