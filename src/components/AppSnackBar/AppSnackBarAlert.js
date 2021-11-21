import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppSnackBar } from '.';
import { APP_ALERT_SEVERITY, APP_ALERT_VARIANT, APP_SNACKBAR_AUTO_HIDE_DURATION } from '../config';
import { AppAlert } from '../forms';

/**
 * Renders App styled SnackBar with Alert as content
 * @component AppSnackBarAlert
 * @param {number} autoHideDuration - duration in milliseconds to auto hide the snackbar
 * @param {boolean} closeByClickAway - if true, the snackbar will close when clicked away
 * @param {string} message - message to display in the snackbar
 * @param {string} severity - severity of the alert
 * @param {string} variant - variant of the alert
 * @param {function} onClose - callback to execute when the snackbar is closed
 */
const AppSnackBarAlert = ({
  autoHideDuration = APP_SNACKBAR_AUTO_HIDE_DURATION,
  closeByClickAway = false,
  message,
  open: propsOpen,
  severity = APP_ALERT_SEVERITY,
  variant = APP_ALERT_VARIANT,
  onClose,
  ...restOfProps
}) => {
  const [open, setOpen] = useState(propsOpen);

  useEffect(() => setOpen(propsOpen), [propsOpen]);

  const handleClose = useCallback(
    (event, reason) => {
      if (!closeByClickAway && reason === 'clickaway') {
        // Ignore clicks outside of the snackbar
        return;
      }

      setOpen(false);

      if (onClose && typeof onClose === 'function') {
        onClose(event, reason);
      }
    },
    [closeByClickAway, onClose]
  );

  const onCloseButtonClick = useCallback(
    (event) => {
      handleClose(event, 'button');
    },
    [handleClose]
  );

  return (
    <AppSnackBar autoHideDuration={autoHideDuration} open={open} onClose={handleClose} {...restOfProps}>
      <AppAlert severity={severity} variant={variant} onClose={onCloseButtonClick}>
        {message}
      </AppAlert>
    </AppSnackBar>
  );
};

AppSnackBarAlert.propTypes = {
  autoHideDuration: PropTypes.number,
  closeByClickAway: PropTypes.bool,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool,
  severity: PropTypes.string,
  variant: PropTypes.string,
  onClose: PropTypes.func,
};

export default AppSnackBarAlert;
