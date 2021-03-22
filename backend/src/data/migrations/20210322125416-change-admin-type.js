'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.sequelize.query(
          'UPDATE users SET type = \'patient\' WHERE email=\'admin@admin.com\';',
          { transaction }),
      ]),
    ),
  down: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.sequelize.query(
          'UPDATE users SET type = \'doctor\' WHERE email=\'admin@admin.com\';',
          { transaction }),
      ]),
    ),
};
