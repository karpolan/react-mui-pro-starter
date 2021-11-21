import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Avatar, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { AppLink } from '..';

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
    fontSize: '3rem',
  },
  name: {
    marginTop: theme.spacing(1),
  },
}));

/**
 * Renders User info with Avatar
 * @component UserInfo
 * @param {string} [className] - optional className for <div> tag
 * @param {boolean} [showAvatar] - user's avatar picture is shown when true
 * @param {object} [user] - logged user data {name, email, avatar...}
 */
const UserInfo = ({ className, showAvatar = false, user, ...restOfProps }) => {
  const classes = useStyles();

  const fullName = user?.name?.trim() || [user?.nameFirst || '', user?.nameLast || ''].join(' ').trim();
  const srcAvatar = user?.avatar ? user?.avatar : undefined;
  const userPhoneOrEmail = user?.phone || user?.email;

  return (
    <div {...restOfProps} className={clsx(classes.root, className)}>
      {showAvatar ? (
        <AppLink to="/user" underline="none">
          <Avatar alt={fullName || 'User Avatar'} className={classes.avatar} src={srcAvatar} />
        </AppLink>
      ) : null}
      <Typography className={classes.name} variant="h6">
        {fullName || 'Current User'}
      </Typography>
      <Typography variant="body2">{userPhoneOrEmail || 'Loading...'}</Typography>
    </div>
  );
};

UserInfo.propTypes = {
  className: PropTypes.string,
  showAvatar: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string,
    nameFirst: PropTypes.string,
    nameLast: PropTypes.string,
    avatar: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default UserInfo;
