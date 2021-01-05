import React from 'react';
import { PropTypesCommonDialog } from './consts';
import CommonDialog from './CommonDialog';

/**
 * Shows generic "Confirmation" dialog
 */
const ConfirmDialog = ({ title = 'Confirm?', confirmButtonText = 'Confirm', ...props }) => {
  return <CommonDialog title={title} confirmButtonText={confirmButtonText} {...props} />;
};

ConfirmDialog.propTypes = PropTypesCommonDialog;

export default ConfirmDialog;
