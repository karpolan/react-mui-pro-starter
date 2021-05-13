import PropTypes from 'prop-types';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import { paperStyle } from '../../utils/styles';

/**
 * Note: You can change these const to control default appearance of the AppSection component
 */
const APP_SECTION_VARIANT = 'subtitle2'; // 'subtitle1' | 'body1' | 'h6'

const useStyles = makeStyles((theme) => ({
  paper: paperStyle(theme),
}));

/**
 * Renders Application styled "Section" using Material UI Paper and Title components
 * @class AppSection
 * @param {node} [children] - content to render
 * @param {string} title - text of heading Title
 * @param {string} variant - variant of MUI Typography to render Title
 */
const AppSection = ({ children, title = 'Missing title...', variant = APP_SECTION_VARIANT, ...restOfProps }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} {...restOfProps}>
      <Typography variant={variant}>{title}</Typography>
      {children || 'Under constriction...'}
    </Paper>
  );
};

AppSection.propTypes = {
  align: PropTypes.oneOf('inherit', 'left', 'center', 'right', 'justify'),
  children: PropTypes.node,
  color: PropTypes.oneOf('initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'),
  title: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit'
  ),
};

export default AppSection;
