import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import {About, NotFound, Settings, Tools, Welcome} from './views';

export const TITLE_PUBLIC = '_TITLE_ for Not Logged User';
export const TITLE_PRIVATE = '_TITLE_';

export const ROWS_PER_PAGE = 25; // Amount of rows per single page in tables and grids

/**
 * Single source of truth for Pages/Views of the App
 * Used for Routing, in SideBar and TopBar, and so on
 */
export const PAGES = [
  {
    // Default page mapping
    exact: true,
    // Don't set href for '/' !!! We use .href to find proper Title in TopBar component
    path: '/',
    component: Welcome, // Change to most frequently used view
  },
  {
    showInSidebar: true,
    title: 'Welcome',
    href: '/welcome',
    path: '/welcome',
    component: Welcome,
    icon: <HomeIcon />,
  },
  {
    showInSidebar: true,
    title: 'Tools',
    href: '/tools',
    path: ['/tools/:id', '/tools'],
    component: Tools,
    icon: <BuildIcon />,
  },
  {
    title: 'Settings',
    href: '/settings',
    path: '/settings',
    component: Settings,
    icon: <SettingsIcon />,
  },
  {
    showInSidebar: true,
    title: 'About',
    href: '/about',
    path: '/about',
    component: About,
    icon: <InfoIcon />,
  },
  {
    title: 'Page does not exist',
    component: NotFound,
  },
];
