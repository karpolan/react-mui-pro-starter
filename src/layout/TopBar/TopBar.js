import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@mui/material';

/**
 * Renders TopBar composition
 * @component TopBar
 */
const TopBar = ({ endNode, startNode, title = '', ...restOfProps }) => {
  return (
    <AppBar
      component="div"
      sx={
        {
          // boxShadow: 'none', // Uncomment to hide shadow
        }
      }
      {...restOfProps}
    >
      <Toolbar disableGutters sx={{ paddingX: 1 }}>
        {startNode}

        <Typography
          variant="h6"
          sx={{
            marginX: 1,
            flexGrow: 1,
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>

        {endNode}
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  endNode: PropTypes.element,
  startNode: PropTypes.element,
  title: PropTypes.string,
};

export default TopBar;
