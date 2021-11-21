import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { APP_LINK_COLOR, APP_LINK_UNDERLINE } from '../config';

/**
 * Restyled Link for navigation in the App, support internal links by "to" prop and external links by "href" prop
 * @component AppLink
 * @param {string} [color] - color of the link, DEFAULT_APP_LINK_COLOR value is used if not provided
 * @param {node} children - content to wrap with <a> tag
 * @param {string} [href] - external link URI
 * @param {boolean} [openInNewTab] - link will be opened in new tab when true, it is default behavior for external links
 * @param {string} [to] - internal link URI
 * @param {string} [underline] - underline styling of the link, DEFAULT_APP_LINK_UNDERLINE value is used if not provided
 */
const AppLink = forwardRef(
  (
    {
      color = APP_LINK_COLOR,
      children,
      href,
      openInNewTab = Boolean(href), // Open external links in new Tab by default
      to,
      underline = APP_LINK_UNDERLINE,
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
      <MuiLink href={href} {...propsToRender} ref={ref}>
        {children}
      </MuiLink>
    ) : (
      <MuiLink component={RouterLink} to={to} {...propsToRender} ref={ref}>
        {children}
      </MuiLink>
    );
  }
);

AppLink.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  openInNewTab: PropTypes.bool,
  to: PropTypes.string,
  underline: PropTypes.string,
};

export default AppLink;
