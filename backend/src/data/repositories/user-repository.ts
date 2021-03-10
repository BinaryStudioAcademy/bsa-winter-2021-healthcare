import { UserModel, DoctorModel, ClinicModel } from '../models';
import { IUser } from '~/common/interfaces';
import { UserType } from '~/common/enums';
import { ModelAlias } from '~/common/enums';

class UserRepository {
  public getAll():Promise<IUser[]>{
    return UserModel.findAll()
  }

  public getByType(type:UserType):Promise<IUser[]>{
    if (type === UserType.DOCTOR) {
      return UserModel.findAll({
        where: {type},
        include: [
          {
            model: DoctorModel,
            as: ModelAlias.DOCTORS,
            attributes: ['id', 'department', 'about'],
            include: [
              {
                model: ClinicModel,
                as: ModelAlias.CLINICS,
                attributes: ['id', 'name', 'address', 'clinicType']
              }
            ]
          }
        ]
      })
    }
    return UserModel.findAll({ where: {type} })
  }

  public getById(id:string):Promise<IUser | null>{
    return UserModel.findByPk(id)
  }

  public createUser(user:IUser):Promise<IUser>{
    return UserModel.create(user)
  }

  public async updateById(id:string, data:IUser):Promise<IUser[]>{
    const result = await UserModel.update(data, {
      where: { id },
      returning: true
    });
    return result[1];
  }

  public deleteById(id:string):Promise<number>{
    return UserModel.destroy({
      where: { id }
    });
  }
}

export { UserRepository };
