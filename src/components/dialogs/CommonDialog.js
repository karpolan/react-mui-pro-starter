import { useCallback } from 'react';
import { PropTypesCommonDialog } from './utils';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { AppButton } from '..';
import { AppDialogTitle } from './components';
import { dialogStyles } from '../../utils/style';

const useStyles = makeStyles((theme) => ({
  ...dialogStyles(theme),
}));

/**
 * Shows generic "Common" dialog
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
  ...props
}) => {
  const classes = useStyles();

  const handleOnConfirm = useCallback(() => {
    if (onConfirm && typeof onConfirm === 'function') {
      onConfirm(data);
    }
  }, [data, onConfirm]);

  return (
    <Dialog
      className={classes.root}
      classes={{ paper: classes.paper }}
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      {...props}
    >
      <AppDialogTitle id="form-dialog-title" onClose={onClose}>
        {title}
      </AppDialogTitle>
      <DialogContent>{body || text}</DialogContent>
      <DialogActions className={classes.actions}>
        {!hideCancelButton && <AppButton onClick={onClose}>Cancel</AppButton>}
        <AppButton onClick={handleOnConfirm} color={confirmButtonColor} mr={0}>
          {confirmButtonText}
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};

CommonDialog.propTypes = PropTypesCommonDialog;

export default CommonDialog;
