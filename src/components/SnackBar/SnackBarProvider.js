import { SnackbarProvider as NotiStackSnackbarProvider } from 'notistack';
import { SNACKBAR_MAX_COUNT } from './utils';

/**
 * Provider for SnackBar stack and utils from "notistack" npm
 * @class SnackBarProvider
 */
const SnackBarProvider = ({ children }) => {
  return (
    <NotiStackSnackbarProvider
      maxSnack={SNACKBAR_MAX_COUNT}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      {children}
    </NotiStackSnackbarProvider>
  );
};

export default SnackBarProvider;
