import React from 'react';
import PropTypes from 'prop-types';
import DefaultIcon from '@material-ui/icons/MoreHoriz';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

const ICONS = {
  default: DefaultIcon,
  close: CloseIcon,
  dots: MoreVertIcon,
  menu: MenuIcon,
  edit: EditIcon,
  delete: DeleteIcon,
  settings: SettingsIcon,
  logout: ExitToAppIcon, // InputIcon
  visibilityon: VisibilityIcon,
  visibilityoff: VisibilityOffIcon,
  notifications: NotificationsIcon,
  filter: FilterListIcon,
};

/**
 * Renders SVG icon by given Name
 * @param {string} props.name - name of Icon to render
 */
const AppIcon = ({name = 'default', ...props}) => {
  const ComponentToRender = ICONS[name.toLowerCase()] || DefaultIcon;
  return <ComponentToRender {...props} />;
};

AppIcon.propTypes = {
  name: PropTypes.string,
};

export default AppIcon;
