import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppRoute } from 'common/enums';
import Sign from 'components/sign/sign'
import NotFound from 'components/not-found/not-found';
import DoctorsSearch from 'components/doctors-search/doctors-search';
import Map from 'components/map/map';

const App: React.FC = () => (
  <Switch>
    <Route path={[AppRoute.SIGN_IN, AppRoute.SIGN_UP]} component={Sign}/>
    <Route path={AppRoute.DOCTORS} component={DoctorsSearch}/>
    <Route path={AppRoute.MAP} component={Map}/>
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default App;
