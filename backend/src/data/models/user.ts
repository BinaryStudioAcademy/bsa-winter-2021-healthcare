import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';

import { IUser } from '~/common/interfaces';
import { ModelName, UserSex, UserType } from '~/common/enums'

interface UserInstance extends IUser, Model {}

const createUserModel = (orm:Sequelize): ModelCtor<UserInstance> => {
  const UserModel = orm.define<UserInstance>(ModelName.USER, {
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      surname: {
        allowNull: false,
        type: DataTypes.STRING
      },
      birthdate: {
        allowNull: false,
        type: DataTypes.DATE
      },
      sex: {
        allowNull: false,
        type: DataTypes.ENUM(UserSex.MALE, UserSex.FEMALE)
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM(UserType.DOCTOR, UserType.PATIENT)
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      imagePath: {
        allowNull: false,
        type: DataTypes.STRING
      },
      diagnosis: {
        type: DataTypes.UUID
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      tableName: 'users',
    }
  )
  return UserModel;
};

export default createUserModel;
