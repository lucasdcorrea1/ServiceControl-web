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
    display: 'flex'
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
  const { className, ...rest } = props;

  const classes = useStyles();

  const [fileInput] = useState(useRef(undefined))
  const [perfilImg, setPreview] = useState('/images/avatars/avatar_11.png');


  useEffect(() => {
    if (!fileInput) {
      return setPreview('/images/avatars/avatar_11.png')

    }
    return


  }, [fileInput])

  const handleClick = () => {
    fileInput.current.click()
  }

  const handleFileChange = e => {
    if (!e.target.files || e.target.files.length === 0) {
      // setSelectedFile(undefined)
      return
    }
    // setSelectedFile(e.target.files[0])
    let reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result)
    }
    reader.readAsDataURL(e.target.files[0])

  }

  const inputFile = (
    <input
      type='file'
      className={classes.uploadInput}
      onChange={(e) => handleFileChange(e)}
      ref={fileInput}
    />
  )


  const user = {
    name: 'Shen Zhi',
    city: 'Los Angeles',
    country: 'USA',
    timezone: 'GTM-7',
    avatar: perfilImg
  };

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
              John Doe
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.city}, {user.country}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {moment().format('hh:mm A')} ({user.timezone})
            </Typography>
          </div>
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
        </div>
        <div className={classes.progress}>
          <Typography variant="body1">Profile Completeness: 70%</Typography>
          <LinearProgress
            value={70}
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
        <Button variant="text">Excluir foto</Button>
      </CardActions>
    </Card >
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;
