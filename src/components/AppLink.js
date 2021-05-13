import  { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  link: {
    '&:hover': {
      //color: 'inherit',
    },
  },
}));

/**
 * Restyled Link for navigation in the App, support internal links by "to" prop and external links by "href" prop
 * @param {string} [to] - internal link URI
 * @param {string} [href] - external link URI
 * @param {boolean} [openInNewTab] - link will be opened in new tab when true
 * @param {string} [className] - optional className for <MuiLink> component
 * @param {string} [wrapperClassName] - optional className for wrapping <span> tag
 */
const AppLink = forwardRef(
  (
    {
      children,
      to,
      href,
      openInNewTab = Boolean(href), // Open external links in new Tab by default
      className,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    const classes = useStyles();
    return (
      <span ref={ref} className={wrapperClassName}>
        {href ? (
          <MuiLink
            href={href}
            className={clsx(className, classes.link)}
            {...(openInNewTab ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            {...props}
          >
            {children}
          </MuiLink>
        ) : (
          <MuiLink
            component={RouterLink}
            to={to}
            className={clsx(className, classes.link)}
            {...(openInNewTab ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            {...props}
          >
            {children}
          </MuiLink>
        )}
      </span>
    );
  }
);

AppLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  openInNewTab: PropTypes.bool,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export default AppLink;
