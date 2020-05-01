import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';

import api from '../../services/Api';
import { getToken } from '../../services/Auth';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [token] = useState(getToken());

  useEffect(() => {
    api.get('api/v1/users', {
      headers: {
        Authorization: token
      }
    }).then(response => setUsers(response.data))
  }, [token])

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
