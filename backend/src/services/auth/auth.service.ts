import { IUser } from '~/common/interfaces/user';
import { IRegisterPayload } from '~/common/interfaces'
import { userRepository } from '~/data/repositories';
import { getPasswordHash } from '~/helpers';

class AuthService {
  public async signUp(registerPayload: IRegisterPayload): Promise<IUser> {
    const passwordHash = await getPasswordHash(registerPayload.password);

    return userRepository.createUser({
      ...registerPayload,
      password: passwordHash
    });
  }
}

export { AuthService };
