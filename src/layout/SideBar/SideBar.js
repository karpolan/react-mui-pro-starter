import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Stack, Divider, Drawer, FormControlLabel, Switch, Tooltip } from '@mui/material';
import { AppIconButton } from '../../components';
import { useAppStore } from '../../store/AppStore';
import { useEventLogout, useEventSwitchDarkMode, useIsAuthenticated, useOnMobile } from '../../hooks';
import SideBarNavList from './SideBarNavList';
import { SIDEBAR_WIDTH, TOPBAR_DESKTOP_HEIGHT } from '../config';
import UserInfo from '../../components/UserInfo';
import { PROP_TYPE_LINK_ITEM } from '../utils';

/**
 * Renders SideBar with Menu and User details
 * Actually for Authenticated users only, rendered in "Private Layout"
 * @component SideBar
 * @param {string} anchor - 'left' or 'right'
 * @param {array} items - list of objects to render as navigation items
 * @param {boolean} open - the Drawer is visible when true
 * @param {string} variant - variant of the Drawer, one of 'permanent', 'persistent', 'temporary'
 * @param {function} onClose - called when the Drawer is closing
 */
const SideBar = ({ anchor, items, open, variant, onClose, ...restOfProps }) => {
  const [state] = useAppStore();
  // const isAuthenticated = state.isAuthenticated; // Variant 1
  const isAuthenticated = useIsAuthenticated(); // Variant 2
  const onMobile = useOnMobile();

  const onSwitchDarkMode = useEventSwitchDarkMode();
  const onLogout = useEventLogout();

  const handleAfterLinkClick = useCallback(
    (event) => {
      if (variant === 'temporary' && typeof onClose === 'function') {
        onClose(event, 'backdropClick');
      }
    },
    [variant, onClose]
  );

  return (
    <Drawer
      anchor={anchor}
      open={open}
      variant={variant}
      PaperProps={{
        sx: {
          width: SIDEBAR_WIDTH,
          marginTop: onMobile ? 0 : variant === 'temporary' ? 0 : TOPBAR_DESKTOP_HEIGHT,
          height: onMobile ? '100%' : variant === 'temporary' ? '100%' : `calc(100% - ${TOPBAR_DESKTOP_HEIGHT})`,
        },
      }}
      onClose={onClose}
    >
      <Stack
        sx={{
          height: '100%',
          padding: 2,
        }}
        {...restOfProps}
        onClick={handleAfterLinkClick}
      >
        {isAuthenticated && (
          <>
            <UserInfo showAvatar />
            <Divider />
          </>
        )}

        <SideBarNavList items={items} showIcons />

        <Divider />

        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          <Tooltip title={state.darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}>
            <FormControlLabel
              label={!state.darkMode ? 'Light mode' : 'Dark mode'}
              control={<Switch checked={state.darkMode} onChange={onSwitchDarkMode} />}
            />
          </Tooltip>

          {isAuthenticated && <AppIconButton icon="logout" title="Logout Current User" onClick={onLogout} />}
        </Stack>
      </Stack>
    </Drawer>
  );
};

SideBar.propTypes = {
  anchor: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  open: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape(PROP_TYPE_LINK_ITEM)),
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
  onClose: PropTypes.func,
};

export default SideBar;
