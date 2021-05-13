import PropTypes from 'prop-types';
import { SvgIcon } from '@material-ui/core';
// SVG assets
import { ReactComponent as LogoIcon } from './logo.svg';
// Material Icons
import DefaultIcon from '@material-ui/icons/MoreHoriz';
import SettingsIcon from '@material-ui/icons/Settings';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import NightIcon from '@material-ui/icons/Brightness3';
import DayIcon from '@material-ui/icons/Brightness5';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import FilterListIcon from '@material-ui/icons/FilterList';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

/**
 * How to use:
 * 1. Import all required MUI or other SVG icons into this file.
 * 2. Add icons with "unique lowercase names" into ICONS object.
 * 3. Use icons everywhere in the App by their names in <AppIcon name="xxx" /> component
 * Important: properties of ICONS object MUST be lowercase!
 * Note: You can use camelCase or UPPERCASE in the <AppIcon name="someIconByName" /> component
 */
const ICONS = {
  default: DefaultIcon,
  logo: () => (
    <SvgIcon>
      <LogoIcon />
    </SvgIcon>
  ),
  close: CloseIcon,
  menu: MenuIcon,
  settings: SettingsIcon,
  visibilityon: VisibilityIcon,
  visibilityoff: VisibilityOffIcon,
  notifications: NotificationsIcon,
  search: SearchIcon,
  filter: FilterListIcon,   
  night: NightIcon,
  day: DayIcon,
  home: HomeIcon,
  info: InfoIcon,
  signup: PersonAddIcon,
  login: PersonIcon,
  logout: ExitToAppIcon,
  smile: InsertEmoticonIcon,
};

/**
 * Renders SVG icon by given Icon name
 * @class AppIcon
 * @param {string} [props.name] - name of the Icon to render, overrides .icon property
 * @param {string} [props.icon] - name of the Icon to render
 */
const AppIcon = ({ name, icon, ...restOfProps }) => {
  const iconName = (name || icon || 'default').trim().toLowerCase();
  const ComponentToRender = ICONS[iconName] || DefaultIcon;
  return <ComponentToRender {...restOfProps} />;
};

AppIcon.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default AppIcon;
