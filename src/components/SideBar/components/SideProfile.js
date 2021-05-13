
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import AppLink from '../../AppLink';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 64,
    height: 64,
  },
  name: {
    marginTop: theme.spacing(1),
  },
}));

/**
 * Renders Logged User profile in SideBar
 * @param {object} currentUser - logged user data {name, email, avatar...}
 * @param {object} [showAvatar] - user's avatar picture is shown when true
 * @param {string} [className] - optional className for <div> tag
 */
const SideProfile = ({ currentUser, showAvatar = false, className, ...props }) => {
  const classes = useStyles();
  return (
    <div {...props} className={clsx(classes.root, className)}>
      {showAvatar ? (
        <Avatar
          alt="Logged User"
          className={classes.avatar}
          src={currentUser?.avatar || currentUser?.picUrl}
          component={AppLink}
          to="/settings"
        />
      ) : null}
      <Typography className={classes.name} variant="h6">
        {Boolean(currentUser?.name) ? currentUser?.name : 'Who is it?'}
      </Typography>
      <Typography variant="body2">{currentUser?.email}</Typography>
    </div>
  );
};

SideProfile.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    picUrl: PropTypes.string,
  }).isRequired,
  showAvatar: PropTypes.bool,
  className: PropTypes.string,
};

export default SideProfile;
