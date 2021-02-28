import { Sequelize } from 'sequelize';
import { dbConfig } from '~/configs';

const sequelize = new Sequelize(dbConfig);

export { sequelize };
