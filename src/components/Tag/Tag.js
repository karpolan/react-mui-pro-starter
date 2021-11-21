import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Chip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { COLOR_VALUES, filledStylesByNames } from '../../utils/style';

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
 * @component Tag
 * @param {string} color - name of color from Material UI palette 'primary', 'secondary', 'warning', and so on
 * @param {string} label - text to show in UpperCase, if label is empty nothing is rendered
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
  color: PropTypes.oneOf(COLOR_VALUES),
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Tag;
