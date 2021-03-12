import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppRoute } from 'common/enums';
import Sign from 'components/sign/sign'
import NotFound from 'components/not-found/not-found';
import Profile from 'components/profile/profile';


const App: React.FC = () => (
  <Switch>
    <Route path={[AppRoute.SIGN_IN, AppRoute.SIGN_UP]} component={Sign}/>
    <Route path="/profile" exact component={Profile} />
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default App;
