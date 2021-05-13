import  { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    // color: theme.palette.button,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
    flexGrow: 1,
  },
  iconOrMargin: {
    // color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  link: { flexGrow: 1 },
}));

/**
 * Router link with styling to use as Items in SideBar
 */
const SideBarLink = forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <div ref={ref} className={classes.link}>
      <NavLink {...props} />
    </div>
  );
});

/**
 * Renders list of navigation items in SideBar
 * @param {array} props.pages - list of objects to render as navigation links
 * @param {boolean} [props.showIcons] - icons are visible when true
 */
const SidebarNav = ({ pages, showIcons = false, className, ...rest }) => {
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map((page) => (
        <ListItem key={`${page.title}-${page.href}`} className={classes.item} disableGutters>
          <Button activeClassName={classes.active} className={classes.button} component={SideBarLink} to={page.href}>
            <div className={classes.iconOrMargin}>{showIcons ? page.icon : null}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  showIcons: PropTypes.bool,
  className: PropTypes.string,
};

export default SidebarNav;
