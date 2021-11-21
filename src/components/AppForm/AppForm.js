import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { formStyle } from '../../utils/style';

export const useStyles = makeStyles((theme) => ({
  formBody: {
    ...formStyle(theme),
  },
}));

/**
 * Application styled Form container
 * @component AppForm
 */
const AppForm = ({ children, ...resOfProps }) => {
  const classes = useStyles();
  return (
    <form {...resOfProps}>
      <Grid container direction="column" alignItems="center">
        <Grid item className={classes.formBody}>
          {children}
        </Grid>
      </Grid>
    </form>
  );
};

export default AppForm;
