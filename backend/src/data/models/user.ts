import {
  ModelDefined,
  DataTypes,
  Optional
} from "sequelize";

import { sequelize } from '../db/connection';
import { User } from '../../../../shared/src/interfaces/user.interface';

interface UserCreationAttributes extends Optional<User, "id"> {}

const UserModel: ModelDefined<
  User,
  UserCreationAttributes
> = sequelize.define(
  'user',
  {
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
  },
  {
    tableName: 'users',
  }
);

export default UserModel;
