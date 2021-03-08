import { IUser } from '~/common/interfaces';

type LoginResponse = {
  token: string;
  user: IUser;
};

export type { LoginResponse };
