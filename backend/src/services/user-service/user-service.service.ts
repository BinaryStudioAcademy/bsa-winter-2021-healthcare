import { userRepository } from '~/data/repositories';
import { IRegisterPayload, IUser } from '~/common/interfaces';

class UserService {
  public getAllUsers(): Promise<IUser[]>{
    return userRepository.getAll()
  }

  public getUserById(id: string): Promise<IUser | null>{
    return userRepository.getById(id)
  }

  public createNewUser(registerPayload: IRegisterPayload): Promise<IUser>{
    return userRepository.createUser(registerPayload)
  }

  public async updateUser(id: string, data: IUser): Promise<IUser[]>{
    return userRepository.updateById(id, data)
  }

  public deleteUser(id: string): Promise<number>{
    return userRepository.deleteById(id)
  }
}

export { UserService };
