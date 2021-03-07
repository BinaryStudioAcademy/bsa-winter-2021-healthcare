import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from 'store/store';
import { AppRoute } from 'common/enums';
import App from './app';
import SignUp from './components/signup/signup';
// import SignIn from './components/signup/signin';

import './assets/styles/index.scss';

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* <Route path={"/" + AppRoute.SIGN_IN} component={SignIn} /> */}
        <Route path={"/" + AppRoute.SIGN_UP} component={SignUp} />
        <Route exact path="/" component={App} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
