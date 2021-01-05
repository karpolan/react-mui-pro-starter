import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { buttonStylesByNames } from '../utils/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    display: 'inline-block',
  },
  // Add "filled" styles for Material UI names 'primary', 'secondary', 'warning', and so on
  ...buttonStylesByNames(theme),
}));

/**
 * Application styled Material UI Button
 * @param {string} color - name of color from Material UI palette 'primary', 'secondary', 'warning', and so on
 */
const AppButton = ({
  children,
  label,
  color = 'default',
  m = 0,
  mt = 1,
  mb = 1,
  ml = 1,
  mr = 1,
  className,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Box {...{ m, mt, mb, ml, mr }} className={classes.box}>
      <Button className={clsx(classes.root, classes[color], className)} variant="contained" {...props}>
        {children || label}
      </Button>
    </Box>
  );
};

AppButton.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default AppButton;
