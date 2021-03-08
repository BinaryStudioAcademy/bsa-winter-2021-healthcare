import bscrypt from 'bcrypt';
import { IUser } from '~/common/interfaces';

const checkIsPasswordSame = (
  user: IUser,
  password: string,
): Promise<boolean> => {
  return bscrypt.compare(password, user.password);
};

export { checkIsPasswordSame };
