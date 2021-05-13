import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, IconButton, Tooltip } from '@material-ui/core';
import { AppIcon } from '..';
import { COLOR_VALUES, buttonStylesByNames } from '../../utils/styles';

const useStyles = makeStyles((theme) => ({
  // Add styles for Material UI names 'primary', 'secondary', 'warning', and so on
  ...buttonStylesByNames(theme),
}));

function getValidMuiColor(color) {
  if (
    color &&
    typeof color === 'string' &&
    ['inherit', 'primary', 'secondary', 'default'].includes(color.toLowerCase())
  ) {
    return color;
  } else {
    return undefined;
  }
}
/**
 * Renders Material UI IconButton with SVG icon by given Name
 * @param {node} [children] - content to render inside MUI IconButton component
 * @param {string} [color] - name of color from Material UI palette 'primary', 'secondary', 'warning', and so on
 * @param {string} [icon] - name of Icon to render inside the IconButton
 * @param {string} [title] - optional title, when set the MUI IconButton component is wrapped with MUI Tooltip
 */
const AppIconButton = ({ children, className, color, icon, title, ...restOfProps }) => {
  const classes = useStyles();
  const classButton = clsx(classes[color], className);
  const colorButton = getValidMuiColor(color);

  const renderIcon = () => (
    <IconButton className={classButton} color={colorButton} {...restOfProps}>
      <AppIcon name={icon} />
      {children}
    </IconButton>
  );

  return title ? <Tooltip title={title}>{renderIcon()}</Tooltip> : renderIcon();
};

AppIconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(COLOR_VALUES),
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'small']),
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default AppIconButton;
