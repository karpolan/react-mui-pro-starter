import PropTypes from 'prop-types';
import List from '@mui/material/List';
import SideBarNavItem from './SideBarNavItem';
import { PROP_TYPE_LINK_ITEM } from '../utils';

/**
 * Renders list of Navigation Items inside SideBar
 * @component SideBarNavList
 * @param {array} items - list of objects to render as navigation items
 * @param {boolean} [showIcons] - icons in navigation items are visible when true
 * @param {function} [onAfterLinkClick] - optional callback called when some navigation item was clicked
 */
const SideBarNavList = ({ items, showIcons, onClick, ...restOfProps }) => {
  return (
    <List component="nav" {...restOfProps}>
      {items.map(({ icon, path, title }) => (
        <SideBarNavItem
          key={`${title}-${path}`}
          icon={showIcons ? icon : undefined}
          path={path}
          title={title}
          onClick={onClick}
        />
      ))}
    </List>
  );
};

SideBarNavList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(PROP_TYPE_LINK_ITEM)),
  showIcons: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SideBarNavList;
