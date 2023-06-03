import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AppIcon from '../AppIcon';
import AppLink from '../AppLink';
import { APP_BUTTON_VARIANT } from '../config';

const MUI_BUTTON_COLORS = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'];

const DEFAULT_SX_VALUES = {
  margin: 1, // By default the AppButton has theme.spacing(1) margin on all sides
};

/**
 * Application styled Material UI Button with Box around to specify margins using props
 * @component AppButton
 * @param {string} [color] - when passing MUI value ('primary', 'secondary', and so on), it is color of the button body, otherwise it is color of text and icons
 * @param {string} [children] - content to render, overrides .label and .text props
 * @param {string | ReactNode} [endIcon] - name of AppIcon or ReactNode to show after the button label
 * @param {string} [href] - external link URI
 * @param {string} [label] - text to render, alternate to .text
 * @param {boolean} [openInNewTab] - link will be opened in new tab when true
 * @param {string | ReactNode} [startIcon] - name of AppIcon or ReactNode to show before the button label
 * @param {Array<func| object| bool> | func | object} [sx] - additional CSS styles to apply to the button
 * @param {string} [text] - text to render, alternate to .label
 * @param {string} [to] - internal link URI
 * @param {string} [underline] - controls underline style when button used as link, one of 'none', 'hover', or 'always'
 * @param {string} [variant] - MUI variant of the button, one of 'text', 'outlined', or 'contained'
 */
const AppButton = ({
  children,
  color: propColor = 'inherit',
  component: propComponent,
  endIcon,
  label,
  startIcon,
  sx: propSx,
  text,
  underline = 'none',
  variant = APP_BUTTON_VARIANT,
  ...restOfProps
}) => {
  const iconStart = useMemo(
    () => (!startIcon ? undefined : typeof startIcon === 'string' ? <AppIcon icon={String(startIcon)} /> : startIcon),
    [startIcon]
  );

  const iconEnd = useMemo(
    () => (!endIcon ? undefined : typeof endIcon === 'string' ? <AppIcon icon={String(endIcon)} /> : endIcon),
    [endIcon]
  );

  const isMuiColor = useMemo(() => MUI_BUTTON_COLORS.includes(propColor), [propColor]);

  const componentToRender =
    !propComponent && (restOfProps?.href || restOfProps?.to) ? AppLink : propComponent ?? Button;

  const colorToRender = isMuiColor ? propColor : 'inherit';
  const sxToRender = {
    ...DEFAULT_SX_VALUES,
    ...propSx,
    ...(isMuiColor ? {} : { color: propColor }),
  };

  return (
    <Button
      component={componentToRender}
      color={colorToRender}
      endIcon={iconEnd}
      startIcon={iconStart}
      sx={sxToRender}
      variant={variant}
      {...{ ...restOfProps, underline }}
    >
      {children || label || text}
    </Button>
  );
};

AppButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  endIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  label: PropTypes.string, // Alternate to .text
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  startIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text: PropTypes.string, // Alternate to .label
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  // Other's props
  component: PropTypes.element, // Could be RouterLink, AppLink, <a>, etc.
  to: PropTypes.string, // Link prop
  href: PropTypes.string, // Link prop
  openInNewTab: PropTypes.bool, // Link prop
  underline: PropTypes.oneOf(['none', 'hover', 'always']), // Link prop
};

export default AppButton;
