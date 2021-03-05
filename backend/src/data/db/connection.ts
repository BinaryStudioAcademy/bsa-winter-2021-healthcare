import { Sequelize, Dialect } from 'sequelize';
import {
  database,
  username,
  password,
  host,
  port,
  dialect,
} from '../../../config/db.config';

const sequelize = new Sequelize({
  port: Number(port),
  dialect: dialect as Dialect,
  database,
  username,
  password,
  host,
  logging: false,
});

export { sequelize };
