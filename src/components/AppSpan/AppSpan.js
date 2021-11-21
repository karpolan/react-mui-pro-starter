import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import { COLOR_VALUES, textStylesByNames } from '../../utils/style';

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
 * Renders <span> element with styling and customization
 * @component AppSpan
 * @param {node|boolean} children - content to render inside <span> tag
 * @param {string} [className] - optional className for <span> tag
 * @param {string} [color] - optional color of the content
 * @param {string} [bold] - when true the content is rendered as **bold** text
 * @param {string} [capitalize] - when true the content is rendered as Capitalized text
 * @param {string} [uppercase] - when true the content is rendered as UPPERCASE text
 */
const AppSpan = ({
  children,
  color = 'default',
  bold = false,
  capitalize = false,
  uppercase = false,
  className,
  ...restOfProps
}) => {
  const classes = useStyles();

  if (typeof children === 'boolean') children = Boolean(children) ? 'TRUE' : 'FALSE';

  return (
    <span
      className={clsx(
        classes.root,
        classes[color],
        bold && classes.bold,
        capitalize && classes.capitalize,
        uppercase && classes.uppercase,
        className
      )}
      {...restOfProps}
    >
      {children}
    </span>
  );
};

AppSpan.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]).isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(COLOR_VALUES),
  bold: PropTypes.bool,
  capitalize: PropTypes.bool,
  uppercase: PropTypes.bool,
};

export default AppSpan;
