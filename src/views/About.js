import React, {useState} from 'react';
import {AppButton, Tag, TagCloud, AppAlert} from '../components';
import {Grid, Checkbox, Switch, Divider} from '@material-ui/core';
import AppSnackBar from '../components/AppSnackBar';
import {useSnackbar} from 'notistack';

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
    <div>
      <h4>Application</h4>
      <p>This is React + Matrial UI application</p>
      <h4>Material Design</h4>
      <h6>Tags</h6>
      <Grid>
        <Tag label="default" color="default" />
        <Tag label="primary" color="primary" />
        <Tag label="secondary" color="secondary" />
        <Tag label="error" color="error" />
        <Tag label="warning" color="warning" />
        <Tag label="info" color="info" />
        <Tag label="success" color="success" />
      </Grid>
      <Divider />
      <TagCloud>
        <Tag label="default" color="default" />
        <Tag label="primary" color="primary" />
        <Tag label="secondary" color="secondary" />
        <Tag label="error" color="error" />
        <Tag label="warning" color="warning" />
        <Tag label="info" color="info" />
        <Tag label="success" color="success" />
      </TagCloud>
      <br />
      <h6>Buttons</h6>
      <Grid container>
        <AppButton label="default" color="default" disabled={buttonsDisabled} />
        <AppButton label="primary" color="primary" disabled={buttonsDisabled} />
        <AppButton label="secondary" color="secondary" disabled={buttonsDisabled} />
        <AppButton label="error" color="error" disabled={buttonsDisabled} />
        <AppButton label="warning" color="warning" disabled={buttonsDisabled} />
        <AppButton label="info" color="info" disabled={buttonsDisabled} />
        <AppButton label="success" color="success" disabled={buttonsDisabled} />
        <Checkbox checked={!buttonsDisabled} onChange={handleSwitchButtons}></Checkbox>
        <Switch
          color="primary"
          title="Enable/Disable buttons"
          checked={!buttonsDisabled}
          onChange={handleSwitchButtons}
        />
      </Grid>
      <br />
      <h6>Alerts</h6>
      <Grid container direction="column">
        <AppAlert>severity="error" by default</AppAlert>
        <AppAlert severity="warning">severity="warning"</AppAlert>
        <AppAlert severity="info">severity="info"</AppAlert>
        <AppAlert severity="success">severity="success"</AppAlert>
      </Grid>
      <br />
      <h6>SnackBars</h6>
      <Grid container>
        {/* <AppSnackBar autoOpen message={'By default the SnackBar shown for 5 seconds only'} /> */}

        <AppButton label="Show Info SnackBar" onClick={() => handleSnackBarShow('info')} />
        <AppSnackBar key="1" open={snackbars.info} severity="info" onClose={() => handleSnackBarHide('info')}>
          SnackBar with severity="info"
        </AppSnackBar>

        <AppButton label="Show Success SnackBar" onClick={() => handleSnackBarShow('success')} />
        <AppSnackBar key="2" open={snackbars.success} severity="success" onClose={() => handleSnackBarHide('success')}>
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

        <AppButton label="Multi SnackBar" onClick={handleMultiSnackbarClick} />
      </Grid>
      <br />
    </div>
  );
};

export default About;
