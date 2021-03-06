import { sequelize } from '../db/connection';
import User from './user';

const UserModel = User(sequelize);

export {
  UserModel
};
