import {
  UserModel,
  DoctorModel,
  ClinicModel,
  PermissionModel,
  SpecializationModel,
  CityModel,
  DocumentModel,
  ProfessionModel,
} from '../models';
import {
  IUser,
  IRegisterPayload,
  IUserWithPermissions,
  IDoctorFiltrationPayload,
} from '~/common/interfaces';
import {
  UserType,
  UserKey,
  ModelAlias,
  DoctorKey,
  ClinicKey,
  SpecializationKey,
  CityKey,
  ProfessionKey,
} from '~/common/enums';
import { Sequelize, Op } from 'sequelize';

class User {
  public getById(id: string): Promise<IUser | null> {
    return UserModel.findByPk(id, {
      include: {
        model: PermissionModel,
        as: ModelAlias.PERMISSIONS,
      },
    });
  }

  public getAll(): Promise<IUserWithPermissions[]> {
    return UserModel.findAll({
      include: {
        model: PermissionModel,
        as: ModelAlias.PERMISSIONS,
      },
    });
  }

  public getByType(
    type: UserType,
    filter: IDoctorFiltrationPayload,
  ): Promise<IUserWithPermissions[]> {
    if (type === UserType.DOCTOR) {
      const where = {
        type,
        ...(filter.doctorName && { name: { [Op.iLike]: `%${filter.doctorName}%` } }),
        ...(filter.typeOfClinic && { '$doctor.clinic.clinicType$': filter.typeOfClinic }),
        ...(filter.city && { '$doctor.clinic.city.name$': filter.city }),
        ...(filter.specialty && {
          '$doctor.profession.name$': filter.specialty,
        }),
      };

      return UserModel.findAll({
        where,
        include: [
          {
            model: DoctorModel,
            as: ModelAlias.DOCTOR,
            attributes: [DoctorKey.ID, DoctorKey.ABOUT],
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
              {
                model: ProfessionModel,
                as: ModelAlias.PROFESSION,
                attributes: [ProfessionKey.NAME],
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

  public getDoctorDetailsById(id: string): Promise<IUser | null> {
    return UserModel.findOne({
      where: { id },
      include: [
        {
          model: DoctorModel,
          as: ModelAlias.DOCTOR,
          attributes: [DoctorKey.ID, DoctorKey.ABOUT],
          include: [
            {
              model: DocumentModel,
              as: ModelAlias.DOCUMENT,
            },
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
            {
              model:ProfessionModel,
              as:ModelAlias.PROFESSION,
            },
          ],
        },
        {
          model: SpecializationModel,
          as: ModelAlias.SPECIALIZATIONS,
          attributes: [SpecializationKey.ID, SpecializationKey.TEXT],
        },
        {
          model: PermissionModel,
          as: ModelAlias.PERMISSIONS,
        },
      ],
    });
  }

  public filterUsersByName(name: string): Promise<IUser[]> {
    return UserModel.findAll({

      attributes: [
        UserKey.ID,
        UserKey.IMAGE_PATH,
        UserKey.SEX,
        UserKey.TYPE,
        [Sequelize.fn('concat', Sequelize.col(UserKey.NAME), ' ', Sequelize.col(UserKey.SURNAME)), UserKey.NAME],
      ],

      where: {
        [Op.or]: {
          [UserKey.NAME]: {
            [Op.iLike]: `%${name}%`,
          },
          [UserKey.SURNAME]: {
            [Op.iLike]: `%${name}%`,
          },
        },
      },
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
    const [, [user]] = await UserModel.update(data, {
      where: { id },
      returning: true,
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

export { User };
