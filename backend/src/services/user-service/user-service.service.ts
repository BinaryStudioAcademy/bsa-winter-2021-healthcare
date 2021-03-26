import { user as userRepository } from '~/data/repositories';
import { UserType } from '~/common/enums';
import { IRegisterPayload, IUser, IUserWithPermissions, IDoctorFiltrationPayload } from '~/common/interfaces';

class User {
  public getAllUsers(): Promise<IUserWithPermissions[]>{
    return userRepository.getAll();
  }

  public getUsersByType(type:UserType, filter: IDoctorFiltrationPayload):Promise<IUserWithPermissions[]>{
    return userRepository.getByType(type, filter);
  }

  public async getUserById(id:string):Promise<IUser | null>{
    const user = await userRepository.getById(id);
    if (user?.type === UserType.DOCTOR){
      return userRepository.getDoctorDetailsById((user.id as string));
    }
    return user;
  }

  public getDoctorDetailsById(id: string): Promise<IUser | null> {
    return userRepository.getDoctorDetailsById(id);
  }

  public filterUsersByName(name: string): Promise<IUser[]> {
    return userRepository.filterUsersByName(name);
  }

  public createNewUser(registerPayload: IRegisterPayload): Promise<IUser> {
    return userRepository.createUser(registerPayload);
  }

  public async updateUser(id: string, data: IUser): Promise<IUser | null>{
    const user = await userRepository.updateById(id, data);
    if (user?.type === UserType.DOCTOR) {
      return userRepository.getDoctorDetailsById((user.id as string));
    }
    return userRepository.getById((user.id as string));
  }

  public deleteUser(id: string): Promise<boolean> {
    return userRepository.deleteById(id);
  }
}

export { User };
