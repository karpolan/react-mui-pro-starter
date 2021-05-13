
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import { textStylesByNames } from '../../utils/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  bold: {
    fontWeight: 'bold',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  // Add "text" styles for Material UI names 'primary', 'secondary', 'warning', and so on
  ...textStylesByNames(theme),
}));

/**
 * Renders Value element with styling and customization
 * @param {node|boolean} prop.children - string, boolean or component to render as Value
 * @param {string} [prop.color] - optional color of the value
 * @param {string} [prop.bold] - when true the value is rendered as **bold** text
 * @param {string} [prop.capitalize] - when true the value is rendered as Capitalized text
 * @param {string} [prop.uppercase] - when true the value is rendered as UPPERCASE text
 * @param {string} [prop.className] - optional className for <span> tag
 */
const Value = ({
  children,
  color = 'default',
  bold = false,
  capitalize = false,
  uppercase = false,
  className,
  ...props
}) => {
  const classes = useStyles();

  if (typeof children === 'boolean') children = Boolean(children) ? 'TRUE' : 'FALSE';

  return (
    <span
      className={clsx(
        classes.root,
        className,
        classes[color],
        bold && classes.bold,
        capitalize && classes.capitalize,
        uppercase && classes.uppercase
      )}
      {...props}
    >
      {children}
    </span>
  );
};

Value.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]).isRequired,
  color: PropTypes.string,
  bold: PropTypes.bool,
  capitalize: PropTypes.bool,
  uppercase: PropTypes.bool,
  className: PropTypes.string,
};

export default Value;
