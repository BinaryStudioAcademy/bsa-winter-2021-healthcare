import {
  UserModel,
  DoctorModel,
  ClinicModel,
  PermissionModel,
  SpecializationModel,
  CityModel,
} from '../models';
import {
  IUser,
  IRegisterPayload,
  IUserWithPermissions,
  IDoctorFiltrationPayload,
} from '~/common/interfaces';
import {
  UserType,
  ModelAlias,
  DoctorKey,
  ClinicKey,
  SpecializationKey,
  CityKey,
} from '~/common/enums';

class UserRepository {
  public getAll(): Promise<IUserWithPermissions[]> {
    return UserModel.findAll({
      include: {
        model: PermissionModel,
        as: ModelAlias.PERMISSIONS,
      },
    });
  }

  public getByType(type: UserType, filter: IDoctorFiltrationPayload): Promise<IUserWithPermissions[]> {
    if (type === UserType.DOCTOR) {
      const where = { type };

      if (filter.doctorName)
        Object.assign(where, { name: filter.doctorName });
      if (filter.typeOfClinic)
        Object.assign(where, { '$doctor.clinic.clinicType$': filter.typeOfClinic });
      if (filter.city)
        Object.assign(where, { '$doctor.clinic.city.name$': filter.city });
      if (filter.specialty)
        Object.assign(where, { '$specializations.text$': filter.specialty });

      return UserModel.findAll({
        where,
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
                include: [
                  {
                    model: CityModel,
                    as: ModelAlias.CITY,
                    attributes: [CityKey.NAME],
                  },
                ],
              },
            ],
          },
          {
            model: PermissionModel,
            as: ModelAlias.PERMISSIONS,
          },
          {
            model: SpecializationModel,
            as: ModelAlias.SPECIALIZATIONS,
            attributes: [
              SpecializationKey.TEXT,
            ],
          },
        ],
      });
    }
    return UserModel.findAll({ where: { type } });
  }

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

  public async updateById(id: string, data: IUser): Promise<IUser[]> {
    const result = await UserModel.update(data, {
      where: { id },
      returning: true,
    });

    return result[1];
  }

  public async deleteById(id: string): Promise<boolean> {
    const deletedRows = await UserModel.destroy({
      where: { id },
    });

    return Boolean(deletedRows);
  }
}

export { UserRepository };
