import { userRepository } from '~/data/repositories';
import { UserType } from '~/common/enums';
import { IRegisterPayload, IUser, IUserWithPermissions } from '~/common/interfaces';

class UserService {
  public getAllUsers(): Promise<IUserWithPermissions[]>{
    return userRepository.getAll();
  }

  public getUsersByType(type:UserType):Promise<IUserWithPermissions[]>{
    return userRepository.getByType(type);
  }
  
  public getUserById(id:string):Promise<IUser | null>{      
    return userRepository.getById(id)
  }

  public getDoctorDetailsById(id: string): Promise<IUser | null> {
    return userRepository.getDoctorDetailsById(id);
  }

  public createNewUser(registerPayload: IRegisterPayload): Promise<IUser> {
    return userRepository.createUser(registerPayload);
  }

  public async updateUser(id: string, data: IUser): Promise<IUser>{
    return userRepository.updateById(id, data)
  }
  public deleteUser(id: string): Promise<boolean> {
    return userRepository.deleteById(id);
  }
}

export { UserService };
