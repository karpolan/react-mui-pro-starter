import PropTypes from 'prop-types';
import { useTheme } from '@mui/material';
import { useOnWideScreen } from '../../hooks/layout';

/**
 * PropTypes for "common" dialogs
 */
export const PropTypesCommonDialog = {
  open: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.bool]),
  title: PropTypes.string,
  text: PropTypes.string,
  body: PropTypes.node,
  hideCancelButton: PropTypes.bool,
  confirmButtonText: PropTypes.string,
  confirmButtonColor: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

/**
 * Returns the width of the dialog's body based on the screen size
 * @returns {number} width of the dialog's body
 */
export function useDialogMinWidth() {
  const theme = useTheme();
  const onWideScreen = useOnWideScreen();
  const paperMinWidth = onWideScreen ? theme.breakpoints.values.md / 2 : theme.breakpoints.values.sm / 2;
  return paperMinWidth;
}
