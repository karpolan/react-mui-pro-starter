import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@mui/material';
import { APP_ALERT_SEVERITY, APP_ALERT_VARIANT } from '../config';

/**
 * Application styled Alert component
 * Note: forwardRef is needed to use AppAlert inside SnackBar and other MUI components
 * @component AppAlert
 * @param {string} severity - severity of the alert, defines the color and icon used
 * @param {string} variant - variant of the alert's styling
 */
const AppAlert = forwardRef(
  ({ children, severity = APP_ALERT_SEVERITY, variant = APP_ALERT_VARIANT, ...restOfProps }, ref) => {
    return (
      <Alert sx={{ mb: 1 }} severity={severity} variant={variant} {...restOfProps} ref={ref}>
        {children}
      </Alert>
    );
  }
);

AppAlert.propTypes = {
  severity: PropTypes.string,
  variant: PropTypes.string,
};

export default AppAlert;
