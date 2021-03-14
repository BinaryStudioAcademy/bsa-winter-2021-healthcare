import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppRoute } from 'common/enums';
import AdminPage from 'components/admin-page/admin-page';
import Clinic from 'components/clinic/clinic';
import Sign from 'components/sign/sign'
import NotFound from 'components/not-found/not-found';
import DoctorsSearch from 'components/doctors-search/doctors-search';

const App: React.FC = () => (
  <Switch>
    <Route path={AppRoute.CLINIC} component={Clinic}/>
    <Route path={AppRoute.ADMIN_PAGE} exact component={AdminPage}/>
    <Route path={[AppRoute.SIGN_IN, AppRoute.SIGN_UP]} component={Sign}/>
    <Route path={AppRoute.DOCTORS} component={DoctorsSearch}/>
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default App;
