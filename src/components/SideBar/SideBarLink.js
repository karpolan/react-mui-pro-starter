import { forwardRef } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, // takes all width
  },
  link: {
    // Set default color of the SideBar link here
    color: theme.palette.text.secondary, // Smooth text
    // color: theme.palette.text.primary, // Contrast text
  },
  linkActive: {
    // Applied to the SideBar link when "associated page" is selected
    // color: theme.palette.text.primary, // Contrast text
    color: theme.palette.primary.main, // Colorful as "primary"
    // color: theme.palette.secondary.main, // Colorful as "secondary"
  },
}));

/**
 * Router link with styling to use in SideBar, highlights the current url
 * @component SideBarLink
 */
const SideBarLink = forwardRef(({ className, ...restOfProps }, ref) => {
  const classes = useStyles();
  const classLink = clsx(className, classes.link);
  return (
    <div ref={ref} className={classes.root}>
      <NavLink exact className={classLink} activeClassName={classes.linkActive} {...restOfProps} />
    </div>
  );
});

export default SideBarLink;
