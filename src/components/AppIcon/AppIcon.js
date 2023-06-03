import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';
// SVG assets
import { ReactComponent as LogoIcon } from './logo.svg';
// Material Icons
import DefaultIcon from '@mui/icons-material/MoreHoriz';
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NightIcon from '@mui/icons-material/Brightness3';
import DayIcon from '@mui/icons-material/Brightness5';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import BuildIcon from '@mui/icons-material/Build';
import AccountCircle from '@mui/icons-material/AccountCircle';

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
  tools: BuildIcon,
  account: AccountCircle,
};

/**
 * Renders SVG icon by given Icon name
 * @component AppIcon
 * @param {string} [icon] - name of the Icon to render
 * @param {string} [name] - name of the Icon to render, overrides .icon property
 */
const AppIcon = ({ icon, name, ...restOfProps }) => {
  const iconName = (name || icon || 'default').trim().toLowerCase();
  const ComponentToRender = ICONS[iconName] || DefaultIcon;
  return <ComponentToRender {...restOfProps} />;
};

AppIcon.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
};

export default AppIcon;
