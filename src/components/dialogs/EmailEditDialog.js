import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import { AppButton } from '..';
import { AppDialogTitle } from './components';
import { useDialogMinWidth } from './utils';

/**
 * Shows modal "Change email" dialog
 * @param {string} props.email - data object
 * @param {function} props.onConfirm - event for Save/Confirm button
 * @param {function} props.onClose - event for Close and Cancel buttons and the backdrop
 */
const EmailEditDialog = ({ email, open = false, title, onConfirm, onClose, ...props }) => {
  const [value, setValue] = useState(email);
  const paperMinWidth = useDialogMinWidth();

  const handleInputChange = useCallback((event) => setValue(event.target.value), []);

  const handleOnConfirm = () => {
    if (onConfirm && typeof onConfirm === 'function') onConfirm(value);
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          minWidth: paperMinWidth,
        },
      }}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      {...props}
    >
      <AppDialogTitle id="form-dialog-title" onClose={onClose}>
        {title || 'Change email'}
      </AppDialogTitle>
      <DialogContent sx={{ py: 1 }}>
        <TextField
          sx={{ m: 0 }}
          variant="outlined"
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          value={value}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3 }}>
        <AppButton onClick={onClose}>Cancel</AppButton>
        <AppButton onClick={handleOnConfirm} color="primary" sx={{ mr: 0 }}>
          Confirm and Save
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};

EmailEditDialog.propTypes = {
  email: PropTypes.string.isRequired,
  title: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EmailEditDialog;
