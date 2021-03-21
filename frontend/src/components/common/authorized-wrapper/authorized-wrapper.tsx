import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'common/types';
import { PermissionName } from 'common/enums';
import { Header, CovidButton } from 'components/common';
import { IUserWithPermissions } from 'common/interfaces';
import { checkHasPermission } from 'helpers';

const AuthorizedWrapper: React.FC = ({ children }) => {
  const { user } = useSelector(({ auth }: RootState) => ({
    user: auth.user,
  }));

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
