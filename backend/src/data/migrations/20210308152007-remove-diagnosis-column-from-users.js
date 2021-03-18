'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.removeColumn('users', 'diagnosis', { transaction }),
      ]),
    ),
  down: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.addColumn(
          'users',
          'diagnosis',
          {
            type: Sequelize.UUID,
          },
          { transaction },
        ),
      ]),
    ),
};
