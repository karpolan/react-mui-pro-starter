import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AppIcon from './AppIcon';

/**
 * Renders Material UI IconButton with SVG icon by given Name
 * @param {string} props.icon - name of Icon to render inside the IconButton
 */
const AppIconButton = ({icon = 'default', children, ...props}) => {
  return (
    <IconButton {...props}>
      <AppIcon name={icon} />
      {children}
    </IconButton>
  );
};

AppIconButton.propTypes = {
  icon: PropTypes.string,
};

export default AppIconButton;
