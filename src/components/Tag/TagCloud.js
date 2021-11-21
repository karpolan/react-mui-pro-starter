import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1, // Without that brakes MUI Grids
    display: 'flex',
    flexFlow: 'row wrap',
    '& div': {
      flex: '1 auto', // Resize chips to fit all area
      margin: '0.2rem',
    },
  },
}));

/**
 * Renders all <div> of the children property as "Tag Cloud"
 * @component TagCloud
 */
const TagCloud = ({ children, className, ...props }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...props}>
      {children}
    </div>
  );
};

TagCloud.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default TagCloud;
