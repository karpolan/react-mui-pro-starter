import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {makeStyles, useTheme} from '@material-ui/styles';
import {ErrorBoundary} from '../components';
import {AppSnackBarProvider} from '../components/AppSnackBar';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import {PAGES} from '../consts';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    height: '100%',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
}));

/**
 * Main page (composition view) for Logged User
 * url: /
 * @param {object} currentUser - currently logged user data
 * @param {func} [onLogout] - callback to logout current user
 */
const Main = ({currentUser, onLogout = () => log.warn('Unhandled Main.onLogout()')}) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {defaultMatches: true});
  const shouldOpenSideBar = isDesktop ? true : openSideBar;
  const classes = useStyles();

  const handleSideBarOpen = useCallback(() => {
    if (!openSideBar) setOpenSideBar(true);
  }, [openSideBar]);

  const handleSideBarClose = useCallback(() => {
    if (openSideBar) setOpenSideBar(false);
  }, [openSideBar]);

  return (
    <AppSnackBarProvider>
      <BrowserRouter>
        <div
          className={clsx({
            [classes.root]: true,
            [classes.shiftContent]: isDesktop,
          })}
        >
          <TopBar onSideBarOpen={handleSideBarOpen} onLogout={onLogout} />

          <SideBar
            open={shouldOpenSideBar}
            variant={isDesktop ? 'persistent' : 'temporary'}
            currentUser={currentUser}
            onClose={handleSideBarClose}
            onLogout={onLogout}
          />

          <main className={classes.content}>
            <ErrorBoundary>
              <Switch>
                {PAGES.map((page) => (
                  <Route key={`${page.title}-${page.href}`} {...page} />
                ))}
              </Switch>
            </ErrorBoundary>
          </main>
        </div>
      </BrowserRouter>
    </AppSnackBarProvider>
  );
};

Main.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    picUrl: PropTypes.string,
  }).isRequired,
  onLogout: PropTypes.func,
};

export default Main;
