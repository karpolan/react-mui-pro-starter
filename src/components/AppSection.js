import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {paperStyles} from '../utils/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  ...paperStyles(theme),
}));

/**
 * Renders App styled "Section" using Material UI Paper and Title components
 * @param {string} title - text of heading title
 */
const AppSection = ({title, children, ...props}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} {...props}>
      <Typography variant="h6">{title}</Typography>
      {children || 'Under constriction...'}
    </Paper>
  );
};

AppSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default AppSection;
