const dotenv = require('dotenv');

dotenv.config();

const { DATABASE_URL, DB_DIALECT } = process.env;

module.exports = {
  url: DATABASE_URL,
  dialect: DB_DIALECT,
  logging: false,
};
