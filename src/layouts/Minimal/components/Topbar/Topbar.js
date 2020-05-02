import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    backgroundImage: "linear-gradient(-90deg, #a900ff, #98009a)"
  }
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <RouterLink to="/dashboard">
          <img
            alt="Logo"
            width="35px"
            src="/images/logos/logo--white.png"
          />
          {env.REACT_APP_NAME}
          TESTE
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
