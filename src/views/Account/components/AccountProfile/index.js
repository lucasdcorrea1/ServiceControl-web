import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex',
    textTransform: 'capitalize'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  },
  uploadInput: {
    display: 'none',

  }
}));

const AccountProfile = props => {
  const { className, user, ...rest } = props;

  const classes = useStyles();

  const [fileInput] = useState(useRef(undefined))
  const [perfilImg, setPreview] = useState('/images/avatars/social.svg');

  useEffect(() => {
    if (user.url)
      return setPreview(user.url)
  }, [user])

  const handleClick = () => {
    fileInput.current.click()
  }

  const handleFileChange = e => {
    if (!e.target.files || e.target.files.length === 0) {
      return
    }

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setPreview(reader.result)
    };
  }

  const inputFile = (
    <input
      type='file'
      className={classes.uploadInput}
      onChange={(e) => handleFileChange(e)}
      ref={fileInput}
    />
  )

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography
              gutterBottom
              variant="h2"
            >
              {user.name}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.email}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {user.bio}
            </Typography>
          </div>
          <Avatar
            className={classes.avatar}
            src={perfilImg}
          />
        </div>
        <div className={classes.progress}>
          <Typography variant="body1">Pefil 70% completo</Typography>
          <LinearProgress
            value={66}
            variant="determinate"
          />
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        {inputFile}
        <Button
          className={classes.uploadButton}
          color="primary"
          onClick={() => handleClick()}
          variant="text"
        >
          Adicionar foto
        </Button>
      </CardActions>
    </Card >
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;
