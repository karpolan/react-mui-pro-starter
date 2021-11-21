import { useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Divider, Drawer, Switch, Tooltip, FormControlLabel } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useAppStore } from '../../store/AppStore';
import { AppIconButton } from '..';
import UserInfo from '../UserInfo/UserInfo';
import SideBarNavigation from './SideBarNavigation';
import { SIDEBAR_WIDTH } from '../../routes/Layout/PrivateLayout';
import { PropTypeSideBarItems } from './utils';
import { api } from '../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  paperInDrawer: {
    width: SIDEBAR_WIDTH,
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
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
}));

/**
 * Renders SideBar with Menu and User details
 * Actually for Authenticated users only, rendered in "Private Layout"
 * @component SideBar
 * @param {string} [prop.anchor] - 'left' or 'right'
 * @param {string} [prop.className] - optional className for <div> tag
 * @param {array} props.items - list of objects to render as navigation links
 * @param {boolean} props.open - the Drawer is visible when true
 * @param {string} props.variant - variant of the Drawer, one of 'permanent', 'persistent', 'temporary'
 * @param {func} [props.onClose] - called when the Drawer is closing
 */
const SideBar = ({ anchor, className, open, items, variant, onClose, ...restOfProps }) => {
  const [state, dispatch] = useAppStore();
  const classes = useStyles();

  const handleSwitchDarkMode = useCallback(() => {
    dispatch({
      type: 'SET_DARK_MODE',
      darkMode: !state.darkMode,
      payload: !state.darkMode,
    });
  }, [state, dispatch]);

  const handleOnLogout = useCallback(async () => {
    await api?.auth?.logout();
    dispatch({ type: 'LOG_OUT' });
  }, [dispatch]);

  const handleAfterLinkClick = useCallback(
    (event) => {
      if (variant === 'temporary' && typeof onClose === 'function') {
        onClose(event, 'backdropClick');
      }
    },
    [variant, onClose]
  );

  const drawerClasses = {
    // See: https://material-ui.com/api/drawer/#css
    paper: classes.paperInDrawer,
  };
  const classRoot = clsx(classes.root, className);

  return (
    <Drawer anchor={anchor} classes={drawerClasses} open={open} variant={variant} onClose={onClose}>
      <div className={classRoot} {...restOfProps} onClick={handleAfterLinkClick}>
        {state.isAuthenticated /*&& state?.currentUser*/ && (
          <>
            <UserInfo className={classes.profile} user={state.currentUser} showAvatar />
            <Divider />
          </>
        )}

        <SideBarNavigation className={classes.nav} items={items} showIcons />
        <Divider />

        <div className={classes.buttons}>
          <Tooltip title={state.darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}>
            <FormControlLabel
              label={!state.darkMode ? 'Light mode' : 'Dark mode'}
              control={<Switch color="primary" checked={state.darkMode} onChange={handleSwitchDarkMode} />}
            />
          </Tooltip>

          {state.isAuthenticated && (
            <AppIconButton icon="logout" title="Logout Current User" onClick={handleOnLogout} />
          )}
        </div>
      </div>
    </Drawer>
  );
};

SideBar.propTypes = {
  anchor: PropTypes.string,
  className: PropTypes.string,
  items: PropTypeSideBarItems.isRequired,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  onLogout: PropTypes.func,
};

export default SideBar;
