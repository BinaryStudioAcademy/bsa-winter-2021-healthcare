import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from 'store/store';
import { AppRoute } from 'common/enums';
import App from './app';
import Sign from './components/sign/sign'

import './assets/styles/index.scss';

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path={[AppRoute.SIGN_UP]} component={Sign} />
        <Route exact path="/" component={App} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
