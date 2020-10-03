import React from 'react';
import {Grid} from '@material-ui/core';
import {FinalMessage} from '../components';

/**
 * Renders Welcome page/view
 * Url: /welcome and /
 */
const Welcome = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <FinalMessage title="Welcome to _TITLE_"></FinalMessage>
      </Grid>
    </Grid>
  );
};

export default Welcome;
