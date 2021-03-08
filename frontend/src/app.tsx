import * as React from 'react';
import { AppRoute } from 'common/enums'
import { Route, Switch } from 'react-router-dom';
import DoctorsSearch from 'components/doctors-search/doctors-search';
import Counter from 'components/counter/counter'

const App: React.FC = () => (
  <Switch>
    <Route exact path={AppRoute.ROOT} component={Counter}/>
    <Route path={AppRoute.DOCTORS} component={DoctorsSearch}/>
  </Switch>
);

export default App;
