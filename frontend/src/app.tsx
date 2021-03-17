import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppRoute, PermissionName } from 'common/enums';
import Users from 'components/users/users';
import Sign from 'components/sign/sign';
import NotFound from 'components/not-found/not-found';
import Clinics from 'components/clinics/clinics';
import Doctors from 'components/doctors/doctors';
import DoctorDetails from 'components/doctor-details/doctor-details';
import Permissions from 'components/permissions/permissions-page';

import { AuthorizedRoute } from 'components/common';

const App: React.FC = () => (
  <Switch>
    <Route path={[AppRoute.SIGN_IN, AppRoute.SIGN_UP]} component={Sign} />
    <AuthorizedRoute path={AppRoute.CLINICS} component={Clinics} />
    <AuthorizedRoute path={AppRoute.DOCTORS} component={Doctors} />
    <AuthorizedRoute path={AppRoute.DOCTOR_DETAILS_$ID} component={DoctorDetails} />
    <AuthorizedRoute exact path={AppRoute.USERS} component={Users}
      permissions={[PermissionName.CREATE_USER, PermissionName.EDIT_USER]}
    />
    <Route path={AppRoute.PERMISSIONS} component={Permissions}/>
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default App;
