import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../../../../../store/fetchActions/users';

import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
    textTransform: 'capitalize'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1),
  }
}));

const Profile = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);
  
  const { className, ...rest } = props;
  const [user, setUser] = useState({ name: '', url: '', bio: '' });

  useEffect(() => {
    if (!userProfile.length) {
      dispatch(getUser());
    }

  }, [dispatch])

  useEffect(() => {
    if (userProfile.length) {
      const [user] = userProfile
      setUser(user)
    }

  }, [userProfile]);

  
  const avatarPerson = () => {
    let avatar;
    if (user.url) {
      avatar = (<Avatar
        alt="Person URL"
        className={classes.avatar}
        component={RouterLink}
        src={user.url}
        to="/settings"
      />)
    } else {
      avatar = (<Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src='/images/avatars/social.svg'
        to="/settings"
      />)
    }
    return avatar;
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {avatarPerson()}
      <Typography
        className={classes.name}
        variant="h4"
      >
        {user.name}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
