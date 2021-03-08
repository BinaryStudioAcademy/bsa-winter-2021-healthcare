import { createToken } from '~/helpers';
import { LoginResponse } from '~/common/types';
import { IUser } from '~/common/interfaces';

class AuthService {
  public async login(user: IUser): Promise<LoginResponse> {
    return {
      token: createToken({ id: user.id }),
      user,
    };
  }
}

export { AuthService };
