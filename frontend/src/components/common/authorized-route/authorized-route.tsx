import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from 'common/types';
import { AppRoute } from 'common/enums';
import { IPermission } from 'common/interfaces';

interface  IRouteProps extends RouteProps {
  exact?: boolean,
  path: string,
  redirect?: AppRoute,
  permissions?: IPermission[],
  component: React.ComponentType<any>,
}

const AuthorizedRoute: React.FC<IRouteProps> = ({ component: Component, redirect = AppRoute.SIGN_IN, permissions = [], ...otherProps}) => {
  const { user } = useSelector(({ auth }: RootState) => ({
    user: auth.user,
  }));

  const hasUser = Boolean(user);
  const hasPermission = Boolean(permissions) // check permissions logic;
  const hasAccess = hasUser && hasPermission;

  return (
    <Route {...otherProps} render={ props => {
      return hasAccess
        ? <Component {...props} />
        : <Redirect to={redirect} />
    }} />
  )
}

export default AuthorizedRoute;
