import {
  UserModel,
  DoctorModel,
  ClinicModel,
  PermissionModel,
  SpecializationModel,
} from '../models';
import {
  IUser,
  IRegisterPayload,
  IUserWithPermissions,
} from '~/common/interfaces';
import {
  UserType,
  ModelAlias,
  DoctorKey,
  ClinicKey,
  SpecializationKey,
} from '~/common/enums';

class UserRepository {

  public getById(id: string): Promise<IUser | null> {
    return UserModel.findByPk(id);
  }

  public getAll(): Promise<IUserWithPermissions[]> {
    return UserModel.findAll({
      include: {
        model: PermissionModel,
        as: ModelAlias.PERMISSIONS,
      },
    });
  }

  public getByType(type: UserType): Promise<IUserWithPermissions[]> {
    if (type === UserType.DOCTOR) {
      return UserModel.findAll({
        where: { type },
        include: [
          {
            model: DoctorModel,
            as: ModelAlias.DOCTOR,
            attributes: [DoctorKey.ID, DoctorKey.DEPARTMENT, DoctorKey.ABOUT],
            include: [
              {
                model: ClinicModel,
                as: ModelAlias.CLINIC,
                attributes: [
                  ClinicKey.ID,
                  ClinicKey.NAME,
                  ClinicKey.ADDRESS,
                  ClinicKey.CLINIC_TYPE,
                ],
              },
            ],
          },
          {
            model: PermissionModel,
            as: ModelAlias.PERMISSIONS,
          },
        ],
      });
    }
    return UserModel.findAll({ where: { type } });
  }

  /*public getById(id: string): Promise<IUser | null> {
    return UserModel.findByPk(id, {
      include:{
        model:DoctorModel, 
        as: ModelAlias.DOCTOR,
        attributes: [DoctorKey.ID, DoctorKey.DEPARTMENT, DoctorKey.ABOUT],
        include:[
          {
            model:DocumentModel,
            as:ModelAlias.DOCUMENT
          }
        ]
      }     
    })  
  }*/    
  public getDoctorDetailsById(id: string): Promise<IUser | null> {
    return UserModel.findOne({
      where: { id },
      include: [
        {
          model: DoctorModel,
          as: ModelAlias.DOCTOR,
          attributes: [DoctorKey.DEPARTMENT, DoctorKey.ABOUT],
        },
        {
          model: SpecializationModel,
          as: ModelAlias.SPECIALIZATIONS,
          attributes: [SpecializationKey.ID, SpecializationKey.TEXT],
        },
      ],
    });
  }

  public createUser(user: IRegisterPayload): Promise<IUser> {
    return UserModel.create(user);
  }

  public findByEmail(email: string): Promise<IUserWithPermissions | null> {
    return UserModel.findOne({
      where: { email },
      include: {
        model: PermissionModel,
        as: ModelAlias.PERMISSIONS,
      },
    });
  }

  public async updateById(id: string, data: IUser): Promise<IUser> {
    const [rows, [user]] = await UserModel.update(data, {
      where: { id },
      returning: true           
    });    
    return user;
  }

  public async deleteById(id: string): Promise<boolean> {
    const deletedRows = await UserModel.destroy({
      where: { id },
    });

    return Boolean(deletedRows);
  }
}

export { UserRepository };
