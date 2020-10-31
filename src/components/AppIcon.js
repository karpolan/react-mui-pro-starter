import React from 'react';
import PropTypes from 'prop-types';
import DefaultIcon from '@material-ui/icons/MoreHoriz';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

/**
 * How to use:
 * 1. Import all MUI or other SVG icons into this file.
 * 2. Add icons with "unique lowercase names" into ICONS object.
 * 3. Use icons everywhere in the App by their names in <AppIcon name="xxx" /> component
 * Important: ICONS properties MUST be lowercase!
 * Note: You can use camelCase or UPPERCASE in the <AppIcon name="someIconByName" /> component
 */
const ICONS = {
  default: DefaultIcon,
  close: CloseIcon,
  dots: MoreVertIcon,
  menu: MenuIcon,
  edit: EditIcon,
  delete: DeleteIcon,
  settings: SettingsIcon,
  logout: ExitToAppIcon,
  visibilityon: VisibilityIcon,
  visibilityoff: VisibilityOffIcon,
  notifications: NotificationsIcon,
  filter: FilterListIcon,
  smile: InsertEmoticonIcon,
};

/**
 * Renders SVG icon by given Icon name
 * @param {string} props.name - name of Icon to render
 */
const AppIcon = ({
  name, // Main props name
  icon, // Alternative props name
  ...props
}) => {
  const ComponentToRender = ICONS[(name || icon || 'default').trim().toLowerCase()] || DefaultIcon;
  return <ComponentToRender {...props} />;
};

AppIcon.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default AppIcon;
