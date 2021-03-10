import { IRegisterPayload, IUser } from '~/common/interfaces'
import { userRepository } from '~/data/repositories';
import { getPasswordHash, createToken } from '~/helpers';
import { LoginResponse } from '~/common/types';

class AuthService {
  public async signUp(registerPayload: IRegisterPayload): Promise<IUser> {
    const passwordHash = await getPasswordHash(registerPayload.password);

    return userRepository.createUser({
      ...registerPayload,
      password: passwordHash
    });
  }
  public async login(user: IUser): Promise<LoginResponse> {
    return {
      token: createToken({ id: user.id }),
      user,
    };
  }
}

export { AuthService };
