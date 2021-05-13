//  import { useState } from 'react';
import PropTypes from 'prop-types';
import { /*Link,*/ useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';
import { PAGES } from '../../consts';
import { updateDocumentTitle } from '../../utils/documentTitle';
import AppIconButton from '../AppIconButton';
// import logo from './logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    //boxShadow: 'none',
    minWidth: '20rem',
  },
  toolbar: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  logo: {
    height: theme.spacing(4),
  },
  title: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flexGrow: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  buttons: {},
}));

/**
 * Renders TopBar
 * @param {func} props.onMenu - called by click on MenuIcon for small screens
 */
const TopBar = ({
  className,
  title = '',
  isAuthenticated = false,
  onMenu,
  onNotifications,
  ...restOfProps
}) => {
  const classes = useStyles();
  // const [notifications] = useState([]); // Todo: Add connect to store
  const location = useLocation();
  // const iconMenu = isAuthenticated ? 'account' : 'menu';

  if (!title && location.pathname !== '/') {
    const matchingPages = PAGES.filter((page) => location.pathname.includes(page.href));
    matchingPages.push(PAGES.slice(-1)[0]); // NotFound page from the last position as a fallback
    title = matchingPages[0]?.title;
    updateDocumentTitle(title); // Set Page's title
  } else {
    updateDocumentTitle(); // Reset to default App title
  }

  return (
    <AppBar {...restOfProps} className={clsx(classes.root, className)}>
      <Toolbar>
        <AppIconButton
          icon="logo"
          // color="primary"
          onClick={onMenu}
        />
        {/* <Link to="/">
          <img className={classes.logo} alt="Logo" src={logo} />
        </Link> */}

        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>

        <div className={classes.buttons}>
          {isAuthenticated && (
            <AppIconButton icon="notifications" color="inherit" title="User Notifications" onClick={onNotifications} />
          )}
          {/* <AppIconButton icon={iconMenu} color="inherit" title="Open Menu" onClick={onMenu} /> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  onMenu: PropTypes.func,
  onNotifications: PropTypes.func,
  onLogout: PropTypes.func,
};

export default TopBar;
