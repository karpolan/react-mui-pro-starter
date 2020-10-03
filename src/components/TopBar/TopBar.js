import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link, useLocation} from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {AppBar, Badge, Hidden, IconButton, Toolbar, Typography} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import {PAGES} from '../../consts';
import {updateDocumentTitle} from '../../utils/documentTitle';
import AppIconButton from '../AppIconButton';
import logo from './logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
  },
  logo: {
    height: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
  title: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flexGrow: 1,
    textAlign: 'center',
  },
  link: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: 'right',
    '& a': {
      color: 'inherit',
    },
  },
  buttons: {},
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
}));

/**
 * Renders TopBar
 * @param {func} props.onSideBarOpen - called by click on MenuIcon for small screens
 */
const TopBar = ({title = '', className, onSideBarOpen, onLogout, ...props}) => {
  const classes = useStyles();
  const [notifications] = useState([]); // Todo: Add connect to store
  const location = useLocation();

  if (!title && location.pathname !== '/') {
    const matchingPages = PAGES.filter((page) => location.pathname.includes(page.href));
    matchingPages.push(PAGES.slice(-1)[0]); // NotFound page from the last position as a fallback
    title = matchingPages[0]?.title;
    updateDocumentTitle(title); // Set Page's title
  } else {
    updateDocumentTitle(); // Reset to default App title
  }

  const handleNotificationClick = (event) => {
    alert('Feature is under constriction');
  };

  return (
    <AppBar {...props} className={clsx(classes.root, className)}>
      <Toolbar>
        <Link to="/">
          <img className={classes.logo} alt="Logo" src={logo} />
        </Link>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <div className={classes.buttons}>
          <Hidden smDown>
            <IconButton color="inherit" onClick={handleNotificationClick}>
              <Badge
                title="Not implemented - Notifications for Current User"
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <AppIconButton
              icon="logout"
              title="Logout Current User"
              className={classes.signOutButton}
              color="inherit"
              onClick={onLogout}
            />
          </Hidden>
          <Hidden mdUp>
            <AppIconButton icon="menu" color="inherit" onClick={onSideBarOpen} />
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  onSideBarOpen: PropTypes.func,
  onLogout: PropTypes.func,
};

export default TopBar;
