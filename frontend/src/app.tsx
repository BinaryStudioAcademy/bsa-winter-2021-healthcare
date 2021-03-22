import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppRoute, PermissionName } from 'common/enums';
import Users from 'components/users/users';
import Sign from 'components/sign/sign';
import NotFound from 'components/not-found/not-found';
import Profile from 'components/profile/profile';
import Clinics from 'components/clinics/clinics';
import Doctors from 'components/doctors/doctors';
import DoctorDetails from 'components/doctor-details/doctor-details';
import Map from 'components/map/map';
import { AuthorizedRoute } from 'components/common';

const App: React.FC = () => (
  <Switch>
    <Route path={[AppRoute.SIGN_IN, AppRoute.SIGN_UP]} component={Sign} />
    <AuthorizedRoute
      path={AppRoute.USER_PROFILE_$ID}
      exact
      component={Profile}
    />
    <AuthorizedRoute path={AppRoute.CLINICS} component={Clinics} />
    <AuthorizedRoute path={AppRoute.DOCTORS} component={Doctors} />
    <Route
      path={AppRoute.DOCTOR_DETAILS_$ID}
      component={DoctorDetails}
    />
    <AuthorizedRoute
      exact
      path={AppRoute.USERS}
      component={Users}
      permissions={[PermissionName.CREATE_USER, PermissionName.EDIT_USER]}
    />
    <AuthorizedRoute exact path={AppRoute.MAP} component={Map}
      permissions={[PermissionName.MAP_MANIPULATION]}
    />
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default App;
