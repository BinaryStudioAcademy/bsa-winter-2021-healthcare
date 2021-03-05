import { createToken } from '~/helpers';

export const login = async ({ id }: { id: string }) => ({
  token: createToken({ id }),
  // TODO: user: await userRepository.getUserById(id)
});
