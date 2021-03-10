import bcrypt from 'bcrypt';
import { IUser } from '~/common/interfaces';

const checkIsPasswordSame = (
  user: IUser,
  password: string,
): Promise<boolean> => {
  return bcrypt.compare(password, user.password);
};

export { checkIsPasswordSame };
