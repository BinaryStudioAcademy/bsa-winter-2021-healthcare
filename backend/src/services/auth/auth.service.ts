import { IUser } from 'healthcare-shared/common/interfaces/user';
import { userRepository } from '~/data/repositories';
import { SignUpResponse } from 'healthcare-shared/common/types'

class AuthService {
  public async signUp({ userCandidate }: { userCandidate: IUser }): Promise<SignUpResponse> {
    return {
      user: await userRepository.createUser(userCandidate)
    };
  }
}

export { AuthService };
