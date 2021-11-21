import { SnackbarProvider as NotiStackSnackbarProvider } from 'notistack';
import {
  APP_SNACKBAR_MAX_COUNT,
  APP_SNACKBAR_ANCHOR_ORIGIN_HORIZONTAL,
  APP_SNACKBAR_ANCHOR_ORIGIN_VERTICAL,
} from '../config';

/**
 * Provider for SnackBar stack and utils from "notistack" npm
 * @component AppSnackBarProvider
 */
const AppSnackBarProvider = ({ children }) => {
  return (
    <NotiStackSnackbarProvider
      maxSnack={APP_SNACKBAR_MAX_COUNT}
      anchorOrigin={{
        horizontal: APP_SNACKBAR_ANCHOR_ORIGIN_HORIZONTAL,
        vertical: APP_SNACKBAR_ANCHOR_ORIGIN_VERTICAL,
      }}
    >
      {children}
    </NotiStackSnackbarProvider>
  );
};

export default AppSnackBarProvider;
