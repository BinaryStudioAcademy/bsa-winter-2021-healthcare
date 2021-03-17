import { Sequelize, Dialect } from 'sequelize';
import { url, dialect } from '../../../config/db.config';

const sequelize = new Sequelize(url ?? '', {
  dialect: dialect as Dialect,
  logging: false,
});

export { sequelize };
