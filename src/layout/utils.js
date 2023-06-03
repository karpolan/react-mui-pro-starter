import PropTypes from 'prop-types';

export const PROP_TYPE_LINK_ITEM = {
  icon: PropTypes.string, // Icon name to use as <AppIcon icon={icon} />
  path: PropTypes.string, // URL to navigate to
  title: PropTypes.string, // Title or primary text to display
  subtitle: PropTypes.string, // Sub-title or secondary text to display
};
