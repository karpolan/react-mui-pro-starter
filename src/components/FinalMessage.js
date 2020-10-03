import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

/**
 * Renders "Big" Final Message
 * Used when the Entity/Object not found, serious error occurs, during maintenance and so on.
 */
const FinalMessage = ({title, children, className, ...props}) => {
  return (
    <Box m={10} {...props}>
      <Typography variant="h4" align="center">
        {title}
      </Typography>
      <Box mt={5}></Box>
      <Typography variant="h6" align="center">
        {children}
      </Typography>
    </Box>
  );
};

FinalMessage.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FinalMessage;
