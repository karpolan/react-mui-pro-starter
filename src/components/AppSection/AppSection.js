import PropTypes from 'prop-types';
import { Paper, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { paperStyle } from '../../utils/style';
import { APP_SECTION_VARIANT } from '../config';

// TODO: Get rid of makeStyles()
const useStyles = makeStyles((theme) => ({
  paper: paperStyle(theme),
}));

/**
 * Renders Application styled "Section" using Material UI Paper and Title components
 * @component AppSection
 * @param {string} [align] - alignment of heading Title
 * @param {node} [children] - content to render
 * @param {string} title - text of heading Title
 * @param {string} [variant] - variant of MUI Typography to render Title
 */
const AppSection = ({
  align = 'inherit',
  children,
  title = 'Missing title...',
  variant = APP_SECTION_VARIANT,
  ...restOfProps
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} {...restOfProps}>
      <Typography align={align} variant={variant}>
        {title}
      </Typography>
      {children || 'Under constriction...'}
    </Paper>
  );
};

AppSection.propTypes = {
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  children: PropTypes.node,
  // color: PropTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default AppSection;
