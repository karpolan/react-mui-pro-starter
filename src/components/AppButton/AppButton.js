import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button, Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { COLOR_VALUES, buttonStylesByNames } from '../../utils/style';
import { APP_BUTTON_VARIANT, APP_BUTTON_MARGIN } from '../config';

// TODO: Get rid of makeStyles()
const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    display: 'inline-block',
  },
  // Add "Button" styles for Material UI names 'primary', 'secondary', 'warning', and so on
  ...buttonStylesByNames(theme),
}));

/**
 * Application styled Material UI Button with Box around to specify margins using props
 * @component AppButton
 * @param {node} [children] - content to render, overrides .label and .text
 * @param {string} [color] - name of color from Material UI palette 'primary', 'secondary', 'warning', and so on
 * @param {string} [label] - text to render, alternate to .text
 * @param {string} [text] - text to render, alternate to .label
 */
const AppButton = ({
  children,
  className,
  color = 'default',
  label, // Alternate to .text prop
  m = 0, // Box margin
  mt = APP_BUTTON_MARGIN, // Box margin
  mb = APP_BUTTON_MARGIN, // Box margin
  ml = APP_BUTTON_MARGIN, // Box margin
  mr = APP_BUTTON_MARGIN, // Box margin
  text, // Alternate to .label prop
  variant = APP_BUTTON_VARIANT,
  underline = 'none', // override MUI default value
  ...restOfProps
}) => {
  const classes = useStyles();
  const classButton = clsx(classes.root, classes[color], className);
  return (
    <Box {...{ m, mt, mb, ml, mr }} className={classes.box}>
      <Button className={classButton} variant={variant} {...{ ...restOfProps, underline }}>
        {children || label || text}
      </Button>
    </Box>
  );
};

AppButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(COLOR_VALUES),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  onClick: PropTypes.func,
};

export default AppButton;
