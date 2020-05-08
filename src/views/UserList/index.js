import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/styles';
import { UsersToolbar, UsersTable } from './components';

import { getAllUsers } from '../../store/fetchActions/users';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

export default function UserList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch])

  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  );
};
