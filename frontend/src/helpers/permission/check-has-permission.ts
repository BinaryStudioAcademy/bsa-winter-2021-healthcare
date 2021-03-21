import { PermissionName } from 'common/enums';
import { IPermission } from 'common/interfaces';

const checkHasPermission = (pagePermissions: PermissionName[], userPermissions: IPermission[]): boolean => {
  return pagePermissions.every((pagePermission) => {
    return userPermissions.some((userPermission) => userPermission.name === pagePermission);
  });
};

export { checkHasPermission };
