
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import MuiAlert from '@material-ui/lab/Alert';

const APP_ALERT_SEVERITY = 'info'; // 'error' | 'info'| 'success' | 'warning'
const APP_ALERT_VARIANT = 'standard'; // 'filled' | 'outlined' | 'standard'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
}));

/**
 * Application styled Alert component
 */
const AppAlert = ({ severity = APP_ALERT_SEVERITY, variant = APP_ALERT_VARIANT, className, onClose, ...props }) => {
  const classes = useStyles();

  return (
    <MuiAlert
      className={clsx(classes.root, className)}
      elevation={6}
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
  className: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default AppAlert;
