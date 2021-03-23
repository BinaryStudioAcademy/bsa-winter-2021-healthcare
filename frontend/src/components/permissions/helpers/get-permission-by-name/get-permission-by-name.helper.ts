import { IPermission } from 'common/interfaces';

const getPermissionByName = (
  permissions: IPermission[],
  nameOfPermission: string,
): IPermission | null => {
  return permissions.find((permission) => permission.name === nameOfPermission) ?? null;
};

export { getPermissionByName };
