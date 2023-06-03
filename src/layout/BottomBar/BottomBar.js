import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AppIcon from '../../components/AppIcon';
import { PROP_TYPE_LINK_ITEM } from '../utils';

/**
 * Renders horizontal Navigation Bar using MUI BottomNavigation component
 * @param {array} items - list of objects to render as navigation items
 * @component BottomBar
 */
const BottomBar = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onNavigationChange = useCallback(
    (_, newValue) => {
      navigate(newValue);
    },
    [navigate]
  );

  return (
    <BottomNavigation
      value={location.pathname} // Automatically highlights bottom navigation for current page
      showLabels // Always show labels on bottom navigation, otherwise label visible only for active page
      onChange={onNavigationChange}
    >
      {items.map(({ title, path, icon }) => (
        <BottomNavigationAction key={`${title}-${path}`} label={title} value={path} icon={<AppIcon icon={icon} />} />
      ))}
    </BottomNavigation>
  );
};

BottomBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(PROP_TYPE_LINK_ITEM)),
};

export default BottomBar;
