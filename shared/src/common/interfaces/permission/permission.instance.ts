import { PermissionKey, PermissionName } from '~/common/enums';

interface IPermission {
  [PermissionKey.ID]: string;
  [PermissionKey.NAME]: PermissionName;
  [PermissionKey.CREATED_AT]: string;
  [PermissionKey.UPDATED_AT]: string;
}

export type { IPermission };
