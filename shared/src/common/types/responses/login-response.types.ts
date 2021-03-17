import { IUserWithPermissions } from '~/common/interfaces';

type LoginResponse = {
  token: string;
  user: IUserWithPermissions;
};

export type { LoginResponse };
