import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';
import { ModelName, UserSex, UserType, TableName } from '~/common/enums';
import { IUser } from '~/common/interfaces';

interface UserInstance extends IUser, Model {}

const createUserModel = (orm: Sequelize): ModelCtor<UserInstance> => {
  const UserModel = orm.define<UserInstance>(
    ModelName.USER,
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      surname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      birthdate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      sex: {
        allowNull: false,
        type: DataTypes.ENUM(UserSex.MALE, UserSex.FEMALE),
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM(UserType.DOCTOR, UserType.PATIENT),
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      imagePath: {
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: TableName.USERS,
    },
  );

  return UserModel;
};

export default createUserModel;
