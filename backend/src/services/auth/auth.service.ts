import { IUser } from '~/common/interfaces/user';
import { IRegisterPayload } from '~/common/interfaces'
import { userRepository } from '~/data/repositories';

class AuthService {
  public async signUp({ registerPayload }: { registerPayload: IRegisterPayload }): Promise<IUser> {
    const user: IUser = {
      ...registerPayload,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return userRepository.createUser(user);
  }
}

export { AuthService };
