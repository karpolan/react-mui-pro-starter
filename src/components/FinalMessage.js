import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

/**
 * Renders "Big" Final Message
 * Used when the Entity/Object not found, serious error occurs, during maintenance and so on.
 * @component FinalMessage
 */
const FinalMessage = ({ children, className, title, ...restOfProps }) => {
  return (
    <Box m={10} {...restOfProps}>
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
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.node,
};

export default FinalMessage;
