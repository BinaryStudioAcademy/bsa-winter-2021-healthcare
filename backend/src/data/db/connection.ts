import { Sequelize } from 'sequelize';
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
  dialect,
  database,
  username,
  password,
  host,
  logging: false,
});

export { sequelize };
