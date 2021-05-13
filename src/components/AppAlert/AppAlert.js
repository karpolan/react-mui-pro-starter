import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import MuiAlert from '@material-ui/lab/Alert';

/**
 * Note: You can change these const to control default appearance of the AppAlert component
 */
const APP_ALERT_SEVERITY = 'error'; // 'error' | 'info'| 'success' | 'warning'
const APP_ALERT_VARIANT = 'filled'; // 'filled' | 'outlined' | 'standard'
const APP_ALERT_ELEVATION = 5;

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
}));

/**
 * Application styled Alert component
 */
const AppAlert = ({
  severity = APP_ALERT_SEVERITY,
  variant = APP_ALERT_VARIANT,
  elevation = APP_ALERT_ELEVATION,
  className,
  onClose,
  ...props
}) => {
  const classes = useStyles();

  return (
    <MuiAlert
      className={clsx(classes.root, className)}
      elevation={elevation}
      severity={severity}
      variant={variant}
      onClose={onClose}
      {...props}
    />
  );
};

AppAlert.propTypes = {
  severity: PropTypes.string,
  variant: PropTypes.string,
  elevation: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default AppAlert;
