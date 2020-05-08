import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  // IconButton,
  TextField,
  Link,
  Typography
} from '@material-ui/core';

// import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { notify } from '../../helpers';


import { logout } from '../../services/Auth';
import api from '../../services/Api';

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F5f5f5',
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {
    height: '100%',
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'column'
  },
  content: {
    backgroundColor: '#FFF',
    height: '90%',
    marginTop: '25px',
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'column',
    borderRadius: '4px',
    boxShadow: '0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)',
  },
  contentHeader: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  socialButtons: {
    marginTop: theme.spacing(3)
  },
  socialIcon: {
    marginRight: theme.spacing(1)
  },
  sugestion: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0),
    backgroundImage: 'linear-gradient(-90deg, #6F04D9, #8245BF)',
    color: '#F5F5F5',
  }
}));

const ForgotPassword = props => {
  const { history } = props;
  logout();

  const classes = useStyles();
  const [load, setLoad] = useState(false);

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  // const handleBack = () => {
  //   history.goBack();
  // };

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSignIn = async event => {
    event.preventDefault();
    try {
      setLoad(true);

      const { email } = formState.values

      const response = await api.post('api/v1/users/auth/forgot', {
        email,
      });
      notify(`${response.data.message}!`, '❤️', 'success', 'top-right');
      history.push('/sign-in');
    } catch (error) {
      notify(`${error.response.data.message}!`, '⚠️', 'error', 'top-right')
    } finally {
      setLoad(false)
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const button = () => {
    if (load) {
      return (
        <Button
          className={classes.signInButton}
          disabled={true}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Entrar
        </Button>)
    }
    return (
      <Button
        className={classes.signInButton}
        disabled={!formState.isValid}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
      >
        Entrar
      </Button>)
  };

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.contentContainer}
          item
          lg={7}
          xs={12}
        >
          <div className={classes.content}>
            <div className={classes.contentHeader}>
              {/* <IconButton className={classes.contentHeader.iconButton} onClick={handleBack}>
                <ArrowBackIcon />

              </IconButton> */}
              <img
                alt="Logo"
                width="100px"
                src="/images/logos/logo--white.png"
              />
            </div>
            <div className={classes.contentBody}>
              <form
                className={classes.form}
                onSubmit={handleSignIn}
              >
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                  Esqueceu sua senha?
                </Typography>

                <Typography
                  align="center"
                  className={classes.sugestion}
                  color="textSecondary"
                  variant="body1"
                >
                  Informe seu e-mail para recuperar sua senha
                </Typography>
                <TextField
                  className={classes.textField}
                  error={hasError('email')}
                  fullWidth
                  helperText={
                    hasError('email') ? formState.errors.email[0] : null
                  }
                  label="E-mail"
                  name="email"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.email || ''}
                  variant="outlined"
                />
                {
                  button()
                }
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  <Link
                    component={RouterLink}
                    to="/sign-in"
                    variant="h6"
                  >
                    Singn in
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

ForgotPassword.propTypes = {
  history: PropTypes.object
};

export default withRouter(ForgotPassword);
