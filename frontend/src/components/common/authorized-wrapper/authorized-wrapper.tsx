import React from 'react';
import { PermissionName } from 'common/enums';
import { Header, CovidButton } from 'components/common';
import { IUserWithPermissions } from 'common/interfaces';
import { checkHasPermission } from '../authorized-route/helpers';
import { getUserFromState } from 'helpers';

const AuthorizedWrapper: React.FC = ({ children }) => {
  const user = getUserFromState();
  const hasMapPermission = checkHasPermission([PermissionName.MAP_MANIPULATION], user?.permissions ?? []);

  return (
    <div>
      <Header user={user as IUserWithPermissions} />
      {children}
      {hasMapPermission && <CovidButton/>}
    </div>
  );
};

export default AuthorizedWrapper;
