import { userRepository } from '~/data/repositories';
import { createToken } from '~/helpers';
import { LoginResponse } from 'healthcare-shared/common/types';

class AuthService {
  public async login({ id }: { id: string }): Promise<LoginResponse> {
    return {
      token: createToken({ id }),
      user: await userRepository.getById(id)
    };
  }
}

export { AuthService };
