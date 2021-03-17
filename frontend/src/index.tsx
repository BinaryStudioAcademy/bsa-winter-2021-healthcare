import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store/store';
import App from './app';
import { Toaster } from 'components/common';

import './assets/styles/index.scss';

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
      <Toaster />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
