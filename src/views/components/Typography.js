import { Typography, Divider } from '@mui/material';
import { AppSection } from '../../components/forms';

/**
 * Renders demo section for MUI Typography
 */
const TypographySection = () => {
  return (
    <AppSection title="Typography">
      <Typography variant="h1">MUI Typo h1</Typography>
      <Typography variant="h2">MUI Typography h2</Typography>
      <Typography variant="h3">MUI Typography h3</Typography>
      <Typography variant="h4">MUI Typography h4</Typography>
      <Typography variant="h5">MUI Typography h5</Typography>
      <Typography variant="h6">MUI Typography h6</Typography>
      <Divider />
      <Typography variant="subtitle1">MUI Typography subtitle1</Typography>
      <Typography variant="subtitle2">MUI Typography subtitle2</Typography>
      <Typography variant="caption">MUI Typography caption</Typography>
      <Divider />
      <Typography variant="body1">
        MUI Typography body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </Typography>
      <Divider />
      <Typography variant="body2">
        MUI Typography body2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </Typography>
      <Divider />
      <Typography variant="overline">MUI Typography overline</Typography>
      <Divider />
      <Typography variant="button">MUI Typography button</Typography>
    </AppSection>
  );
};

export default TypographySection;
