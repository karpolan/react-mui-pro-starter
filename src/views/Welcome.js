import React from 'react';
import {Grid} from '@material-ui/core';
import {AppLink, FinalMessage, AppIcon} from '../components';
import ButtonsSection from './Sections/Buttons';
import TagsSection from './Sections/Tags';

/**
 * Renders Welcome page/view
 * Url: /welcome and /
 */
const Welcome = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FinalMessage title="Welcome to _TITLE_">
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
            are welcome <AppIcon name="smile" />
          </p>
        </FinalMessage>
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
    </Grid>
  );
};

export default Welcome;
