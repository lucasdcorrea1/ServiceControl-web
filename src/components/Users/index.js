import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getUsersFilterStatus } from '../../store/fetchActions/users';

import { Link as RouterLink } from 'react-router-dom';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Typography
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    textTransform: 'capitalize'
  },
  content: {
    padding: 0
  },
  subTitle: {
    marginLeft: '15px',
    fontWeight: 500,
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const userType = type => {
  let tableCellUserType;
  switch (type) {
    case 1:
      tableCellUserType = 'Super Usuário'
      break;
    case 2:
      tableCellUserType = 'Admistrador'
      break;
    case 3:
      tableCellUserType = 'Usuário'
      break;
    case 4:
      tableCellUserType = 'Cliente'
      break;
    default:
      tableCellUserType = 'Usuário'
  }
  return tableCellUserType;
};

const UsersPending = props => {
  const { className, users, ...rest } = props;
  const classes = useStyles();

  const [values] = useState({
    state: 'Pendentes'
  });

  const title = `Usuários ${values.state}`
  const subTitle = `Total: ${users.length}`

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        subtitle={subTitle}
        title={title}
      />
      <CardHeader
        subtitle={subTitle}
        title={subTitle}
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {users.map((user, i) => (
            <ListItem
              divider={i < user.length - 1}
              key={user.id}
            >
              <ListItemAvatar>
                <img
                  alt="users"
                  className={classes.image}
                  src='/images/avatars/social.svg'
                />
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={userType()}
              />

              <IconButton
                edge="end"
                size="small"
              >
                <MoreVertIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <RouterLink to='/users'>
          <Button
            color="primary"
            size="small"
            variant="text"
          >
            Ver Todos <ArrowRightIcon />
          </Button>
        </RouterLink>
      </CardActions>
    </Card>
  );
};

UsersPending.propTypes = {
  className: PropTypes.string
};

export default UsersPending;
