import React, {useState} from 'react';
import {AppButton, Tag, TagCloud, AppAlert, AppLink, AppSection} from '../components';
import {Grid, Checkbox, Switch} from '@material-ui/core';
import AppSnackBar from '../components/AppSnackBar';
import {useSnackbar} from 'notistack';

/**
 * Renders "About" page
 * uer: /about
 */
const About = () => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [snackbars, setSnackbars] = useState({
    info: false,
    success: false,
    error: false,
  });
  const [multiSnackbarCount, setMultiSnackbarCount] = useState(1);

  const {enqueueSnackbar /*, closeSnackbar*/} = useSnackbar();

  const handleSwitchButtons = () => {
    setButtonsDisabled(!buttonsDisabled);
  };

  const handleSnackBarShow = (name) => {
    setSnackbars({...snackbars, [name]: true});
  };

  const handleSnackBarHide = (name) => {
    setSnackbars({...snackbars, [name]: false});
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
            This <AppLink href="https://reactjs.org/">React</AppLink> application is built using{' '}
            <AppLink href="https://material-ui.com/">Material UI</AppLink> components.
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
        <AppSection title="Buttons">
          <AppButton label="default" color="default" disabled={buttonsDisabled} />
          <AppButton label="primary" color="primary" disabled={buttonsDisabled} />
          <AppButton label="secondary" color="secondary" disabled={buttonsDisabled} />
          <AppButton label="info" color="info" disabled={buttonsDisabled} />
          <AppButton label="success" color="success" disabled={buttonsDisabled} />
          <AppButton label="warning" color="warning" disabled={buttonsDisabled} />
          <AppButton label="error" color="error" disabled={buttonsDisabled} />
          <AppButton label="small" color="default" size="small" disabled={buttonsDisabled} />
          <Checkbox checked={!buttonsDisabled} onChange={handleSwitchButtons} title="Enable/Disable buttons"></Checkbox>
          <Switch
            color="primary"
            title="Enable/Disable buttons"
            checked={!buttonsDisabled}
            onChange={handleSwitchButtons}
          />
        </AppSection>
      </Grid>

      <Grid item xs={12} sm={6}>
        <AppSection title="Tags">
          <Tag label="default" color="default" />
          <Tag label="primary" color="primary" />
          <Tag label="secondary" color="secondary" />
          <Tag label="info" color="info" />
          <Tag label="success" color="success" />
          <Tag label="warning" color="warning" />
          <Tag label="error" color="error" />
        </AppSection>
      </Grid>

      <Grid item xs={12} sm={6}>
        <AppSection title="TagCloud">
          <TagCloud>
            <Tag label="default" color="default" />
            <Tag label="primary" color="primary" />
            <Tag label="secondary" color="secondary" />
            <Tag label="info" color="info" />
            <Tag label="success" color="success" />
            <Tag label="warning" color="warning" />
            <Tag label="error" color="error" />
          </TagCloud>
        </AppSection>
      </Grid>

      <Grid item xs={12} sm={6}>
        <AppSection title="Alerts">
          <AppAlert>severity="error" by default</AppAlert>
          <AppAlert severity="warning">severity="warning"</AppAlert>
          <AppAlert severity="info">severity="info"</AppAlert>
          <AppAlert severity="success">severity="success"</AppAlert>
        </AppSection>
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
