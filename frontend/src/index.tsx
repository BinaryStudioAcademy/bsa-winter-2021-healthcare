import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from 'store/store';
import App from './app';
import Registration from './containers/SignUpPage/SignUpPage';

import './assets/styles/index.scss';

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/sign-up" component={Registration} />
        <Route exact path="/" component={App} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
