import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppRoute } from 'common/enums';
import AdminPage from 'components/admin-page/admin-page';
import Sign from 'components/sign/sign'
import NotFound from 'components/not-found/not-found';
import Clinics from 'components/clinics/clinics';
import DoctorsSearch from 'components/doctors-search/doctors-search';

const App: React.FC = () => (
  <Switch>
    <Route path={AppRoute.ADMIN_PAGE} exact component={AdminPage}/>
    <Route path={[AppRoute.SIGN_IN, AppRoute.SIGN_UP]} component={Sign}/>
    <Route path={AppRoute.CLINICS} component={Clinics} />
    <Route path={AppRoute.DOCTORS} component={DoctorsSearch}/>
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default App;
