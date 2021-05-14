import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@material-ui/core';

/**
 * Note: You can change these const to control default appearance of the AppLink component
 */
const DEFAULT_APP_LINK_COLOR = 'textSecondary'; // 'primary' // 'secondary'
const DEFAULT_APP_LINK_UNDERLINE = 'hover'; // 'always

/**
 * Restyled Link for navigation in the App, support internal links by "to" prop and external links by "href" prop
 * @class AppLink
 * @param {node} children - content to wrap with <a> tag
 * @param {string} [to] - internal link URI
 * @param {string} [href] - external link URI
 * @param {boolean} [openInNewTab] - link will be opened in new tab when true
 */
const AppLink = forwardRef(
  (
    {
      color = DEFAULT_APP_LINK_COLOR,
      children,
      href,
      openInNewTab = Boolean(href), // Open external links in new Tab by default
      to,
      underline = DEFAULT_APP_LINK_UNDERLINE,
      ...restOfProps
    },
    ref
  ) => {
    const propsToRender = {
      color,
      underline,
      ...(openInNewTab ? { target: '_blank', rel: 'noreferrer noopener' } : {}),
      ...restOfProps,
    };
    return href ? (
      <MuiLink ref={ref} href={href} {...propsToRender}>
        {children}
      </MuiLink>
    ) : (
      <MuiLink ref={ref} component={RouterLink} to={to} {...propsToRender}>
        {children}
      </MuiLink>
    );
  }
);

AppLink.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  href: PropTypes.string,
  openInNewTab: PropTypes.bool,
  to: PropTypes.string,
  underline: PropTypes.string,
};

export default AppLink;
