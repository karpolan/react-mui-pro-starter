import { Grid } from '@mui/material';
import { AppLink } from '../../components';
import { AppSection } from '../../components/forms';
import ButtonsSection from '../components/Buttons';
import TagsSection from '../components/Tags';
import DialogsSection from '../components/Dialogs';
import AlertsSection from '../components/Alerts';
import LinksSection from '../components/Links';
import IconButtonSection from '../components/IconButtons';
import TypographySection from '../components/Typography';
import SnackBarsSection from '../components/SnackBars';

/**
 * Renders "About" page
 * url: /about
 */
const AboutView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppSection title="Application">
          <p>
            This <AppLink href="https://react.dev/">React</AppLink> application is built using{' '}
            <AppLink href="https://mui.com/">Material UI</AppLink> components.
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

      <Grid item xs={12} sm={7}>
        <LinksSection />
      </Grid>

      <Grid item xs={12} sm={5}>
        <IconButtonSection />
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
        <SnackBarsSection />
      </Grid>

      <Grid item xs={12}>
        <TypographySection />
      </Grid>
    </Grid>
  );
};

export default AboutView;
