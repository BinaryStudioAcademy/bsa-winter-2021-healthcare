import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName, TableName } from '~/common/enums';
import { IUserSpecialization } from '~/common/interfaces';

interface UserSpecializationInstance extends IUserSpecialization, Model { }

const createUserSpecializationModel = (orm: Sequelize): ModelCtor<UserSpecializationInstance> => {
  const UserSpecialization = orm.define<UserSpecializationInstance>(ModelName.USER_SPECIALIZATION, {
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: TableName.USERS_SPECIALIZATIONS,
  });

  return UserSpecialization;
};

export default createUserSpecializationModel;
