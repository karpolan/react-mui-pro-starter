import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import {Divider, Drawer, IconButton} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {makeStyles} from '@material-ui/styles';
import {SideNav, SideProfile} from './components';
import {AppLink, AppIconButton} from '../../components';
import {PAGES} from '../../consts';
import {localStorageGet, localStorageSet} from '../../utils/localStorage';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  paperInDrawer: {
    width: 240,
    [theme.breakpoints.up('md')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  profile: {
    marginBottom: theme.spacing(2),
  },
  nav: {},
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: theme.spacing(2),
  },
}));

/**
 * Renders SideBar with Menu and User details
 * @class SideBar
 * @param {boolean} props.open - the Drawer is visible when true
 * @param {string} props.variant - variant of the Drawer, one of 'permanent', 'persistent', 'temporary'
 * @param {func} [props.onClose] - called when the Drawer is closing
 * @param {func} [props.onLogout] - callback to logout current user
 * @param {string} [prop.className] - optional className for <div> tag
 */
const SideBar = ({open, variant, currentUser, onClose, onLogout, className, ...props}) => {
  const [showIcons, setShowIcons] = useState(localStorageGet('sideBarIcons', true));
  const classes = useStyles();
  const drawerClasses = {
    // See: https://material-ui.com/api/drawer/#css
    paper: classes.paperInDrawer,
  };

  const handleVisibilityClick = () => {
    setShowIcons((value) => {
      value = !value;
      localStorageSet('sideBarIcons', value);
      return value;
    });
  };

  return (
    <Drawer anchor="left" classes={drawerClasses} onClose={onClose} open={open} variant={variant}>
      <div {...props} className={clsx(classes.root, className)}>
        <SideProfile className={classes.profile} currentUser={currentUser} showAvatar />
        <Divider />
        <SideNav className={classes.nav} pages={PAGES.filter((page) => page.showInSidebar)} showIcons={showIcons} />
        <Divider />
        <div className={classes.buttons}>
          <AppIconButton icon="settings" component={AppLink} title="User Profile and Settings" to="/settings" />
          <IconButton title="Show/Hide icons" onClick={handleVisibilityClick}>
            {showIcons ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
          <AppIconButton icon="logout" title="Logout Current User" onClick={onLogout} />
        </div>
      </div>
    </Drawer>
  );
};

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    picUrl: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func,
  onLogout: PropTypes.func,
  className: PropTypes.string,
};

export default SideBar;
