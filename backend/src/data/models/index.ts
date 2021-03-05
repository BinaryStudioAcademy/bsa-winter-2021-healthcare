import Sequelize from 'sequelize';
import { DbInterface } from '../../common/interfaces/db.interface';
import { UserFactory } from './User';
import { sequelize } from '../db/connection'

export const createModels = (): DbInterface => {

  const db: DbInterface = {
    sequelize,
    Sequelize,
    User: UserFactory(sequelize, Sequelize)
  };

  return db;
};

export const db = createModels();
