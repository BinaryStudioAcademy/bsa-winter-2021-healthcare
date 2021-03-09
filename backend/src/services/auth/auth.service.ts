import { IUser } from '~/common/interfaces/user';
import { IRegisterPayload } from '~/common/interfaces'
import { userRepository } from '~/data/repositories';

class AuthService {
  public async signUp(registerPayload: IRegisterPayload): Promise<IUser> {
    return userRepository.createUser(registerPayload);
  }
}

export { AuthService };
