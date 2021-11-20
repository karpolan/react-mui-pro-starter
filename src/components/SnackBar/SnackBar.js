import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, Snackbar as MuiSnackbar } from '@material-ui/core';
import AppAlert from '../AppAlert';
import { SNACKBAR_AUTO_HIDE_DURATION } from './utils';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

/**
 * Renders App styled SnackBar
 * @component SnackBar
 * @param {boolean} [autoOpen] - enables automatic opening of the SnackBar
 * @param {number} [autoHideDuration] - duration in milliseconds to hide the SnackBar
 * @param {node} [children] - content to render, overrides .message property
 * @param {node|string|number} [message] - text or numeric content to render
 */
export const SnackBar = ({
  autoHideDuration = SNACKBAR_AUTO_HIDE_DURATION,
  autoOpen = true,
  children,
  className,
  elevation, // AppAlert prop
  message,
  severity, // AppAlert prop
  variant, // AppAlert prop
  onClose, // AppAlert prop
  ...restOfProps
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(autoOpen);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;

    setOpen(false);

    if (onClose && typeof onClose === 'function') {
      onClose(event, reason);
    }
  };

  return (
    <MuiSnackbar
      className={clsx(classes.root, className)}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      // TransitionComponent={SlideUpTransition} // Not working :(
      {...restOfProps}
    >
      <AppAlert onClose={handleClose} elevation={elevation} severity={severity} variant={variant}>
        {children || message}
      </AppAlert>
    </MuiSnackbar>
  );
};

SnackBar.propTypes = {
  autoHideDuration: PropTypes.number,
  autoOpen: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  elevation: PropTypes.number,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  severity: PropTypes.string,
  variant: PropTypes.string,
  onClose: PropTypes.func,
};

export default SnackBar;
