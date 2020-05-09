import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../store/fetchActions/users';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { AccountProfile, AccountDetails } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Account = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);

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

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <AccountProfile user={user} />
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <AccountDetails user={user} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Account;
