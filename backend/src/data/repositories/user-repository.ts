import { UserModel, DoctorModel, ClinicModel } from '../models';
import { IUser, IRegisterPayload } from '~/common/interfaces';
import { UserType, ModelAlias,  Attribute} from '~/common/enums';


class UserRepository {
  public getAll(): Promise<IUser[]> {
    return UserModel.findAll();
  }

  public getByType(type:UserType):Promise<IUser[]>{
    if (type === UserType.DOCTOR) {
      return UserModel.findAll({
        where: {type},
        include: {
          model:DoctorModel,
          as:ModelAlias.DOCTOR,
          attributes: [Attribute.ID, Attribute.DEPARTMENT, Attribute.ABOUT],
          include:[
            {
              model: ClinicModel,
              as: ModelAlias.CLINIC,
              attributes: [Attribute.ID, Attribute.NAME, Attribute.ADDRESS, Attribute.CLINIC_TYPE]
            }
          ]
        }
      })
    }
    return UserModel.findAll({ where: {type} })
  }

  public getById(id: string): Promise<IUser | null> {
    return UserModel.findByPk(id);
  }

  public createUser(user: IRegisterPayload): Promise<IUser> {
    return UserModel.create(user);
  }

  public findByEmail(email: string): Promise<IUser | null> {
    return UserModel.findOne({
      where: { email },
    });
  }

  public async updateById(id: string, data: IUser): Promise<IUser[]> {
    const result = await UserModel.update(data, {
      where: { id },
      returning: true,
    });

    return result[1];
  }

  public async deleteById(id:string): Promise<boolean> {
    const deletedRows = await UserModel.destroy({
      where: { id }
    });

    return Boolean(deletedRows)
  }
}

export { UserRepository };
