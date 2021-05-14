import PropTypes from 'prop-types';

export const PropTypeSideBarItems = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    icon: PropTypes.string,
  })
);
