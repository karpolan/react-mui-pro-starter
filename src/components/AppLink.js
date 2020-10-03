import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  link: {
    '&:hover': {
      // color: 'inherit',
    },
  },
}));

/**
 * Restyled Link for navigation in the App, support external links by href
 * @param {string} [href] - optional external link, use "to" prop for internal links
 * @param {boolean} [openInNewTab] - link will be opened in new tab when true
 * @param {string} [className] - optional className for <a> tag or <RouterLink> component
 * @param {string} [wrapperClassName] - optional className for wrapping <span> tag
 */
const AppLink = forwardRef(({children, href, openInNewTab, className, wrapperClassName, ...props}, ref) => {
  const classes = useStyles();
  return (
    <span ref={ref} className={wrapperClassName}>
      {href ? (
        <a
          href={href}
          {...(openInNewTab ? {target: '_blank', rel: 'noreferrer noopener'} : {})}
          className={clsx(className, classes.link)}
          {...props}
        >
          {children}
        </a>
      ) : (
        <RouterLink
          className={clsx(className, classes.link)}
          {...(openInNewTab ? {target: '_blank', rel: 'noreferrer noopener'} : {})}
          {...props}
        >
          {children}
        </RouterLink>
      )}
    </span>
  );
});

AppLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  openInNewTab: PropTypes.bool,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export default AppLink;
