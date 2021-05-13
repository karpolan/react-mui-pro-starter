import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { AppButton, AppLink, AppSection } from '../components';
import AppSnackBar from '../components/AppSnackBar';
import ButtonsSection from './Sections/Buttons';
import TagsSection from './Sections/Tags';
import DialogsSection from './Sections/Dialogs';
import AlertsSection from './Sections/Alerts';

/**
 * Renders "About" page
 * url: /about
 */
const About = () => {
  const [snackbars, setSnackbars] = useState({
    info: false,
    success: false,
    error: false,
  });
  const [multiSnackbarCount, setMultiSnackbarCount] = useState(1);

  const { enqueueSnackbar /*, closeSnackbar*/ } = useSnackbar();

  const handleSnackBarShow = (name) => {
    setSnackbars({ ...snackbars, [name]: true });
  };

  const handleSnackBarHide = (name) => {
    setSnackbars({ ...snackbars, [name]: false });
  };

  const handleMultiSnackbarClick = () => {
    enqueueSnackbar('Multi SnackBar #' + multiSnackbarCount, {
      variant: ['info', 'success', 'warning', 'error'][Math.trunc(Math.random() * 4)],
    });
    setMultiSnackbarCount((value) => value + 1);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppSection title="Application">
          <p>
            This{' '}
            <AppLink color="primary" href="https://reactjs.org/">
              React
            </AppLink>{' '}
            application is built using <AppLink href="https://material-ui.com/">Material UI</AppLink> components.
          </p>
          <p>
            The project is <AppLink href="https://github.com/karpolan/react-mui-pro-starter">Open Source</AppLink> and
            contains lots of useful components and utilities.
          </p>
          <p>
            Everyone can use the source code as a{' '}
            <AppLink href="https://github.com/karpolan/react-mui-pro-starter/blob/main/README.md">
              starter for new React project
            </AppLink>
            . Any{' '}
            <AppLink href="https://github.com/karpolan/react-mui-pro-starter/issues">comments and suggestions</AppLink>{' '}
            are welcome :)
          </p>
        </AppSection>
      </Grid>

      <Grid item xs={12}>
        <ButtonsSection />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TagsSection />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TagsSection useTagCloud />
      </Grid>

      <Grid item xs={12}>
        <DialogsSection />
      </Grid>

      <Grid item xs={12} sm={6}>
        <AlertsSection />
      </Grid>

      <Grid item xs={12} sm={6}>
        <AppSection title="SnackBars">
          <Grid container justify="center">
            <AppSnackBar autoOpen message={'By default the SnackBar shown for 5 seconds only'} />

            <AppButton label="Show Info SnackBar" onClick={() => handleSnackBarShow('info')} />
            <AppSnackBar key="1" open={snackbars.info} severity="info" onClose={() => handleSnackBarHide('info')}>
              SnackBar with severity="info"
            </AppSnackBar>

            <AppButton label="Show Success SnackBar" onClick={() => handleSnackBarShow('success')} />
            <AppSnackBar
              key="2"
              open={snackbars.success}
              severity="success"
              onClose={() => handleSnackBarHide('success')}
            >
              SnackBar with severity="success"
            </AppSnackBar>

            <AppButton label="Show Error SnackBar" onClick={() => handleSnackBarShow('error')} />
            <AppSnackBar
              key="3"
              open={snackbars.error}
              severity="error"
              autoHideDuration={null}
              onClose={() => handleSnackBarHide('error')}
            >
              SnackBar with severity="error" visible until user clicks on [X] button
            </AppSnackBar>

            <AppButton label="Multi SnackBar (Click few times)" onClick={handleMultiSnackbarClick} />
          </Grid>
        </AppSection>
      </Grid>
    </Grid>
  );
};

export default About;
