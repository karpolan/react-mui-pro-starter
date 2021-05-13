import  { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SnackbarProvider } from 'notistack';
import { makeStyles } from '@material-ui/styles';
// import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import AppAlert from './AppAlert';

const SNACKBAR_AUTO_HIDE_DURATION = 5000; // Set to null if want to disable AutoHide feature by default
const SNACKBAR_MAX_COUNT = 5; // Used in SnackbarProvider from notistack npm

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

// function SlideUpTransition(props) {
//   return <Slide {...props} direction="up" />;
// }

/**
 * Provider for SnackBar stack and utils from "notistack" npm
 */
export const AppSnackBarProvider = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={SNACKBAR_MAX_COUNT}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

/**
 * Renders App styled SnackBar
 */
export const AppSnackBar = ({
  message,
  children,
  autoOpen = true,
  autoHideDuration = SNACKBAR_AUTO_HIDE_DURATION,
  direction = 'up',
  severity,
  variant = 'filled',
  className,
  onClose,
  ...props
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
    <Snackbar
      className={clsx(classes.root, className)}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      // TransitionComponent={SlideUpTransition} // Not working :(
      {...props}
    >
      <AppAlert onClose={handleClose} severity={severity} variant={variant}>
        {children || message}
      </AppAlert>
    </Snackbar>
  );
};

AppSnackBar.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  children: PropTypes.node,
  autoOpen: PropTypes.bool,
  autoHideDuration: PropTypes.number,
  severity: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default AppSnackBar;
