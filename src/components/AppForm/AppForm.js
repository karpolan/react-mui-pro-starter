import { makeStyles, Grid } from '@material-ui/core';
import { formStyle } from '../../utils/styles';

export const useStyles = makeStyles((theme) => ({
  formBody: {
    ...formStyle(theme),
  },
}));

/**
 * Application styled Form container
 * @class AppForm
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
