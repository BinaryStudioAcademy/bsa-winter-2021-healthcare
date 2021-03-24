import { IRegisterPayload, IUser } from '~/common/interfaces';
import { user as userRepository } from '~/data/repositories';
import { getPasswordHash, createToken } from '~/helpers';
import { LoginResponse } from '~/common/types';

class Auth {
  public async signUp(
    registerPayload: IRegisterPayload,
  ): Promise<LoginResponse> {
    const passwordHash = await getPasswordHash(registerPayload.password);

    const newUser = await userRepository.createUser({
      ...registerPayload,
      password: passwordHash,
    });

    return this.login(newUser);
  }
  public async login(user: IUser): Promise<LoginResponse> {
    return {
      token: createToken({ id: user.id }),
      user,
    };
  }
}

export { Auth };
