import { PropTypesCommonDialog } from './utils';
import CommonDialog from './CommonDialog';

/**
 * Shows generic "Message" dialog
 */
const MessageDialog = ({ title = 'Message', confirmButtonText = 'OK', hideCancelButton = true, ...props }) => {
  return (
    <CommonDialog title={title} confirmButtonText={confirmButtonText} hideCancelButton={hideCancelButton} {...props} />
  );
};

MessageDialog.propTypes = PropTypesCommonDialog;

export default MessageDialog;
