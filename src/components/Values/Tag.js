
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';
import { filledStylesByNames } from '../../utils/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: '1 auto', // Resize chips to fit all area
    margin: '0.2rem',
  },
  // Add "filled" styles for Material UI names 'primary', 'secondary', 'warning', and so on
  ...filledStylesByNames(theme),
}));

/**
 * Renders Tag (actually MUI Chip) with given text Label styling by MUI Color name
 * @param {string} label - text to show in UpperCase, if label is empty nothing is rendered
 * @param {string} color - name of color from Material UI palette 'primary', 'secondary', 'warning', and so on
 */
const Tag = ({ label = '', color = 'default', className, onClick, ...props }) => {
  const classes = useStyles();

  if (!label) return null; // Don't render anything for empty label

  return (
    <Chip
      size="small"
      className={clsx(classes.root, classes[color], className)}
      label={label.toUpperCase()}
      onClick={onClick}
      {...props}
    />
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Tag;
