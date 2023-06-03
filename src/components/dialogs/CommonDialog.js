import { useCallback } from 'react';
import { PropTypesCommonDialog } from './utils';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import { AppButton } from '..';
import { AppDialogTitle } from './components';
import { useDialogMinWidth } from './utils';

/**
 * Shows generic "Common" dialog
 * @component CommonDialog
 * @param {function} props.onConfirm - event for Confirm button, called as onConfirm(data)
 * @param {function} props.onClose - event for Close and Cancel buttons and the backdrop
 */
const CommonDialog = ({
  open = false, // Don't show dialog by default
  data, // optional data passed to onConfirm callback
  title = 'Missing title...',
  text = 'Text is missing...',
  body, // JSX to render instead of .text
  hideCancelButton = false,
  confirmButtonText = 'Confirm',
  confirmButtonColor = 'primary',
  onConfirm,
  onClose,
  ...restOfProps
}) => {
  const paperMinWidth = useDialogMinWidth();

  const handleOnConfirm = useCallback(() => {
    if (onConfirm && typeof onConfirm === 'function') {
      onConfirm(data);
    }
  }, [data, onConfirm]);

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      open={open}
      PaperProps={{
        sx: {
          minWidth: paperMinWidth,
        },
      }}
      onClose={onClose}
      {...restOfProps}
    >
      <AppDialogTitle id="form-dialog-title" onClose={onClose}>
        {title}
      </AppDialogTitle>
      <DialogContent sx={{ py: 1 }}>{body || text}</DialogContent>
      <DialogActions sx={{ px: 3 }}>
        {!hideCancelButton && <AppButton onClick={onClose}>Cancel</AppButton>}
        <AppButton onClick={handleOnConfirm} color={confirmButtonColor} sx={{ mr: 0 }}>
          {confirmButtonText}
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};
CommonDialog.propTypes = PropTypesCommonDialog;

export default CommonDialog;
