import PropTypes from 'prop-types';
import { Snackbar } from '@mui/material';
import { APP_SNACKBAR_ANCHOR_ORIGIN_HORIZONTAL, APP_SNACKBAR_ANCHOR_ORIGIN_VERTICAL } from '../config';

/**
 * Renders App styled MUI SnackBar
 * @component AppSnackBar
 * @param {object} [anchorOrigin] - horizontal and vertical position of the snackbar
 * @param {number} [autoHideDuration] - The number of milliseconds to wait before automatically calling .onClose event.
 */
export const AppSnackBar = ({
  anchorOrigin = {
    horizontal: APP_SNACKBAR_ANCHOR_ORIGIN_HORIZONTAL,
    vertical: APP_SNACKBAR_ANCHOR_ORIGIN_VERTICAL,
  },
  children,
  ...restOfProps
}) => {
  return (
    <Snackbar anchorOrigin={anchorOrigin} {...restOfProps}>
      {children}
    </Snackbar>
  );
};

AppSnackBar.propTypes = {
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['center', 'left', 'right']),
    vertical: PropTypes.oneOf(['bottom', 'top']),
  }),
};

export default AppSnackBar;
