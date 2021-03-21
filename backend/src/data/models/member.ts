import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';
import { ModelName, TableName } from '~/common/enums';
import { IMember } from '~/common/interfaces';

interface MemberInstance extends IMember, Model {}

const createMemberModel = (orm: Sequelize): ModelCtor<MemberInstance> => {
  const MemberModel = orm.define<MemberInstance>(
    ModelName.MEMBER,
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      // type: {
      //   allowNull: false,
      //   type: DataTypes.ENUM(UserType.DOCTOR, UserType.PATIENT),
      // },
      avatarPath: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'imagePath',
      },
    },
    {
      tableName: TableName.USERS,
    },
  );

  return MemberModel;
};

export default createMemberModel;
