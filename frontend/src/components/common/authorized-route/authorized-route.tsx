import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from 'common/types';
import { AppRoute, PermissionKey, PermissionName } from 'common/enums';
import { IPermission } from "common/interfaces";

interface  IRouteProps extends RouteProps {
  redirectTo?: AppRoute,
  permissions?: PermissionName[],
  component: React.ComponentType<any>,
}

const checkPermission = (checkListPermissionName: PermissionName[], Permissions: IPermission[]) =>
  checkListPermissionName.reduce((accumulator: boolean, checkPermission: PermissionName) => {
    const hasCheckPermission = Permissions.some((permission) => permission[PermissionKey.NAME] === checkPermission);
    return (hasCheckPermission && accumulator) ? true : false;
  }, true);

const AuthorizedRoute: React.FC<IRouteProps> = ({ component: Component, redirectTo = AppRoute.NOT_FOUND, permissions = [], ...otherProps}) => {
  const { user } = useSelector(({ auth }: RootState) => ({
    user: auth.user,
  }));

  const hasUser = Boolean(user);

  const hasPermission = checkPermission(permissions, user?.permissions ?? []);

  return (
    <Route {...otherProps} render={ props => {
      return hasUser
        ? hasPermission
          ? <Component {...props} />
          : <Redirect to={redirectTo} />
        : <Redirect to={AppRoute.SIGN_IN} />
    }} />
  )
}

export default AuthorizedRoute;
