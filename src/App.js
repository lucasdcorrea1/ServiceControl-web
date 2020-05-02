import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import { ToastContainer } from 'react-toastify';
import { chartjs } from './helpers';

import validate from 'validate.js';
import theme from './theme';
import validators from './common/validators';
import Routes from './routes';

import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import 'react-toastify/dist/ReactToastify.css';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
        <ToastContainer />
      </ThemeProvider>
    );
  }
}
