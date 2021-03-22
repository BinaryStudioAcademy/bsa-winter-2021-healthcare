import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';
import { ModelName, TableName } from '~/common/enums';
import { IMember } from '~/common/interfaces';

interface MemberInstance extends IMember, Model {}

const createMemberModel = (orm: Sequelize): ModelCtor<MemberInstance> => {
  const MemberModel = orm.define<MemberInstance>(
    ModelName.MEMBER,
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
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
