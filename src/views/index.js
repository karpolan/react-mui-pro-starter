import React from 'react';
/**
 * Note: Don't import/export all Views directly, use lazy loading!
 */
import { withSuspense } from '../components';
import NotFoundView from './NotFoundView';
import NotImplementedView from './NotImplementedView';

/**
 * Views/Pages with Lazy Loading
 */
const WelcomeView = withSuspense(React.lazy(() => import('./Welcome')));
const AboutView = withSuspense(React.lazy(() => import('./About')));
const ToolsView = () => <NotImplementedView name="Tools" />; // Sample of non-implemented View
const UserView = () => <NotImplementedView name="User" />; // Sample of non-implemented View

export { NotFoundView, AboutView, WelcomeView, UserView, ToolsView };
