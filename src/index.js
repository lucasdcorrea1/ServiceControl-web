import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import store from './store';
import App from './App';

// require('dotenv/config');

// console.log(process.env.TESTEDDDDD)
console.log(process.env.REACT_APP_NAME)

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
