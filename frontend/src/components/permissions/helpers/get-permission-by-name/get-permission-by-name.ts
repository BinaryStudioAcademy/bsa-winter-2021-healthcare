import { IPermission } from 'common/interfaces';

const getPermissionByName = (
  permissions: IPermission[],
  nameOfPermission: string,
) => {
  return permissions.find((permission) => permission.name === nameOfPermission);
};

export { getPermissionByName };
