import PropTypes from 'prop-types';
import { DialogTitle } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { AppIconButton } from '../..';
import { dialogStyles } from '../../../utils/style';

const useStyles = makeStyles((theme) => ({
  ...dialogStyles(theme),
}));

/**
 * Renders Material UI Dialog Title with optional (x) button to close the dialog
 * @component AppDialogTitle
 * @param {func} [onClose] - when set the (x) button aded to Dialog Title and event called on button click
 */
const AppDialogTitle = ({ children, onClose, ...props }) => {
  const classes = useStyles();
  return (
    <DialogTitle {...props}>
      {children}
      {Boolean(onClose) ? (
        <AppIconButton className={classes.xButton} icon="close" aria-label="Close" title="Close" onClick={onClose} />
      ) : null}
    </DialogTitle>
  );
};

AppDialogTitle.propTypes = {
  onClose: PropTypes.func,
};

export default AppDialogTitle;
