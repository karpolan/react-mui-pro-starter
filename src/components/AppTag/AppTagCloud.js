import PropTypes from 'prop-types';
import { Box } from '@mui/material';

/**
 * Renders all <div> of the children property as "Tag Cloud"
 * @component TagCloud
 */
const TagCloud = ({ children, ...restOfProps }) => {
  return (
    <Box sx={{ display: 'flex', flex: 1, flexFlow: 'row wrap' }} {...restOfProps}>
      {children}
    </Box>
  );
};

TagCloud.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TagCloud;
