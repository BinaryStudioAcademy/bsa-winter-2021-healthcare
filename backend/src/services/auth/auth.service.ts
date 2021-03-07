import { createToken } from '~/helpers';

class AuthService {
  public async login({ id }: { id: string }): Promise<{ token: string }> {
    return {
      token: createToken({ id }),
      // TODO: user: await userRepository.getUserById(id)
    };
  }
}

export { AuthService };
