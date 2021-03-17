import { IUser } from '~/common/interfaces';

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends IUser {}
    interface Request {
      user?: IUser;
    }
  }
}
