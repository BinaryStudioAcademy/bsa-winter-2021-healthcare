import { UserPermissionKey } from '~/common/enums';

interface IUserPermission {
  [UserPermissionKey.CREATED_AT]: string;
  [UserPermissionKey.UPDATED_AT]: string;
}

export type { IUserPermission };
