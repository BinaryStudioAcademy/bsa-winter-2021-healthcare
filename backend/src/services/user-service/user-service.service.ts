import { userRepository } from '~/data/repositories';
<<<<<<< HEAD
import { IUser } from '~/common/interfaces';
import { UserType } from '~/common/enums';
=======
import { IRegisterPayload, IUser } from '~/common/interfaces';
>>>>>>> development

class UserService {
  public getAllUsers(): Promise<IUser[]>{
    return userRepository.getAll()
  }
<<<<<<< HEAD
  public getUsersByType(type:UserType):Promise<IUser[]>{
    return userRepository.getByType(type)
  }
  public getUserById(id:string):Promise<IUser | null>{
=======

  public getUserById(id: string): Promise<IUser | null>{
>>>>>>> development
    return userRepository.getById(id)
  }

  public createNewUser(registerPayload: IRegisterPayload): Promise<IUser>{
    return userRepository.createUser(registerPayload)
  }

  public async updateUser(id: string, data: IUser): Promise<IUser[]>{
    return userRepository.updateById(id, data)
  }
<<<<<<< HEAD
  public deleteUser(id:string):Promise<boolean>{
=======

  public deleteUser(id: string): Promise<number>{
>>>>>>> development
    return userRepository.deleteById(id)
  }
}

export { UserService };
