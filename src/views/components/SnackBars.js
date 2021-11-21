import { useState } from 'react';
import { Grid } from '@mui/material';
import { useSnackbar } from 'notistack';
import { AppButton } from '../../components';
import { AppSection } from '../../components/forms';
import { AppSnackBar, AppSnackBarAlert } from '../../components/AppSnackBar';
import { APP_SNACKBAR_AUTO_HIDE_DURATION } from '../../components/config';

const SnakBarsSection = () => {
  const [snackBars, setSnackBars] = useState({
    default: true,
    info: false,
    success: false,
    error: false,
  });
  const [multiSnackbarCount, setMultiSnackbarCount] = useState(1);

  const { enqueueSnackbar /*, closeSnackbar*/ } = useSnackbar();

  const handleSnackBarShow = (name) => {
    setSnackBars({ ...snackBars, [name]: true });
  };

  const handleSnackBarHide = (name) => {
    setSnackBars({ ...snackBars, [name]: false });
  };

  const handleMultiSnackbarClick = () => {
    enqueueSnackbar('Multi SnackBar #' + multiSnackbarCount, {
      variant: ['info', 'success', 'warning', 'error'][Math.trunc(Math.random() * 4)],
    });
    setMultiSnackbarCount((value) => value + 1);
  };

  return (
    <AppSection title="SnackBars">
      <Grid container justifyContent="center">
        <AppSnackBar
          key="0"
          autoHideDuration={5000}
          open={snackBars.default}
          message={`This is AppSnackBar, it will disappear in ${APP_SNACKBAR_AUTO_HIDE_DURATION / 1000} seconds`}
          onClose={() => handleSnackBarHide('default')}
        />

        <AppButton label="Show Info SnackBar" onClick={() => handleSnackBarShow('info')} />
        <AppSnackBarAlert
          open={snackBars.info}
          message={'AppSnackBarAlert with severity="info"'}
          severity="info"
          onClose={() => handleSnackBarHide('info')}
        />

        <AppButton label="Show Success SnackBar" onClick={() => handleSnackBarShow('success')} />
        <AppSnackBarAlert
          key="2"
          open={snackBars.success}
          message={'AppSnackBarAlert with severity="success"'}
          severity="success"
          onClose={() => handleSnackBarHide('success')}
        />

        <AppButton label="Show Error SnackBar" onClick={() => handleSnackBarShow('error')} />
        <AppSnackBarAlert
          key="3"
          autoHideDuration={null}
          open={snackBars.error}
          message={'AppSnackBarAlert with severity="error" visible until the user clicks [X] button'}
          severity="error"
          onClose={() => handleSnackBarHide('error')}
        />

        <AppButton label="Multi SnackBar (Click few times)" onClick={handleMultiSnackbarClick} />
      </Grid>
    </AppSection>
  );
};

export default SnakBarsSection;
