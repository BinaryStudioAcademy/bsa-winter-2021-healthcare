import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../../common/types';

import { User } from '../../../../healthcare-shared/src/interfaces/user.interface'

export interface UserInstance extends Sequelize.Instance<User>, User {

};

export const UserFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<UserInstance, User> => {
  const attributes: SequelizeAttributes<User> = {
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey:true
    },
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
      type: DataTypes.ENUM('male', 'female')
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM('patient', 'doctor')
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
    geoposition: {
      type: DataTypes.GEOMETRY
    },
    diagnosis: {
      type: DataTypes.UUID
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  };

  const User = sequelize.define<UserInstance, User>('User', attributes);

  return User;
};
