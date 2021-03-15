import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppRoute } from 'common/enums';
import Sign from 'components/sign/sign'
import NotFound from 'components/not-found/not-found';
import DoctorsSearch from 'components/doctors-search/doctors-search';
import DoctorsFiltration from 'components/doctors-filtration-panel/doctors-filtration-panel';

const App: React.FC = () => (
  <Switch>
    <Route path={[AppRoute.SIGN_IN, AppRoute.SIGN_UP]} component={Sign}/>
    <Route path={AppRoute.DOCTORS} component={DoctorsSearch}/>
    <Route path="/" component={DoctorsFiltration}/>
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default App;
