import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme, Grid, useMediaQuery } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useAppStore } from '../../store';
import { TopBar } from '../../components/TopBar';
import { ErrorBoundary } from '../../components';
import { SideBar } from '../../components/SideBar';

const TITLE_PRIVATE = '_TITLE_';
const MOBILE_SIDEBAR_ANCHOR = 'left'; // 'right';
const DESKTOP_SIDEBAR_ANCHOR = 'left'; // 'right';
export const SIDEBAR_WIDTH = 240; // 240px

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh', // Full screen height
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
  header: {},
  shiftContent: {
    paddingLeft: DESKTOP_SIDEBAR_ANCHOR.includes('left') ? SIDEBAR_WIDTH : 0,
    paddingRight: DESKTOP_SIDEBAR_ANCHOR.includes('right') ? SIDEBAR_WIDTH : 0,
  },
  content: {
    flexGrow: 1, // Takes all possible space
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  footer: {},
}));

/**
 * Centralized place in the App to update document.title
 */
function updateDocumentTitle(title = '') {
  if (title) {
    document.title = `${title} - ${TITLE_PRIVATE}`;
  } else {
    document.title = TITLE_PRIVATE;
  }
  return document.title;
}

/**
 * Url to Title mapping
 */
const KNOWN_PAGES = [
  {
    title: 'Page does not exist',
  },
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/welcome',
    title: 'Welcome',
  },
  {
    path: '/tools',
    title: 'Tools',
  },
  {
    path: '/user',
    title: 'User',
  },
  {
    path: '/settings',
    title: 'Settings',
  },
  {
    path: '/about',
    title: 'About',
  },
];

/**
 * "Link to Page" items in Sidebar
 */
const SIDE_BAR_PRIVATE_ITEMS = [
  {
    title: 'Welcome',
    path: '/welcome',
    icon: 'home',
  },
  {
    title: 'Tools',
    path: '/tools',
    icon: 'tools',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'info',
  },
];

/**
 * Renders "Private Layout" composition
 * @component PrivateLayout
 */
const PrivateLayout = ({ children }) => {
  const [state] = useAppStore();
  const [openSideBar, setOpenSideBar] = useState(false);
  const [title, setTitle] = useState();
  const theme = useTheme();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), { defaultMatches: true });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let newTitle = '';
    if (location.pathname !== '/') {
      const matchingPages = KNOWN_PAGES.filter(
        (page) =>
          page?.path && // Ignore empty
          page?.path?.length > 1 && // Ignore '/'
          location?.pathname.includes(page?.path)
      );
      matchingPages.push(KNOWN_PAGES[0]); // "NotFound" page as a fallback
      newTitle = matchingPages[0]?.title;
      updateDocumentTitle(newTitle);
    } else {
      newTitle = '';
      updateDocumentTitle(); // Reset to default App title
    }
    setTitle(newTitle);
  }, [location.pathname]);

  const handleLogoClick = useCallback(() => {
    // Navigate to '/' when clicking on Logo/Menu icon when the SideBar is already visible
    navigate('/');
  }, [navigate]);

  const handleSideBarOpen = useCallback(() => {
    if (!openSideBar) setOpenSideBar(true);
  }, [openSideBar]);

  const handleSideBarClose = useCallback(() => {
    if (openSideBar) setOpenSideBar(false);
  }, [openSideBar]);

  const classRoot = clsx({
    [classes.root]: true,
    [classes.shiftContent]: isDesktop,
  });
  const shouldOpenSideBar = isDesktop ? true : openSideBar;

  return (
    <Grid container direction="column" className={classRoot}>
      <Grid item className={classes.header} component="header">
        <TopBar
          isAuthenticated={state.isAuthenticated}
          title={title}
          onMenu={shouldOpenSideBar ? handleLogoClick : handleSideBarOpen}
        />

        <SideBar
          anchor={isDesktop ? DESKTOP_SIDEBAR_ANCHOR : MOBILE_SIDEBAR_ANCHOR}
          open={shouldOpenSideBar}
          variant={isDesktop ? 'persistent' : 'temporary'}
          items={SIDE_BAR_PRIVATE_ITEMS}
          onClose={handleSideBarClose}
        />
      </Grid>

      <Grid className={classes.content} component="main">
        <ErrorBoundary name="Content">{children}</ErrorBoundary>
      </Grid>
    </Grid>
  );
};

export default PrivateLayout;
