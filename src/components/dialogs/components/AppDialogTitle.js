import PropTypes from 'prop-types';
import { DialogTitle, Typography, Stack, useTheme } from '@mui/material';
import { AppIconButton } from '../../';

/**
 * Renders Material UI Dialog Title with optional (x) button to close the dialog
 * @param {function} [onClose] - when set the (x) button added to Dialog Title and event called on button click
 */
const AppDialogTitle = ({ children, onClose, ...props }) => {
  const theme = useTheme();
  return (
    <DialogTitle {...props}>
      <Stack direction="row" maxWidth={`calc(100% - ${theme.spacing(4)})`}>
        <Typography
          sx={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
          variant="h6"
        >
          {children}
        </Typography>
      </Stack>
      {Boolean(onClose) ? (
        <AppIconButton
          size="large"
          icon="close"
          title="Close"
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: theme.spacing(0.5),
            top: theme.spacing(0.5),
          }}
        />
      ) : null}
    </DialogTitle>
  );
};

AppDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default AppDialogTitle;
