'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.removeColumn('doctors', 'department', { transaction }),
        queryInterface.removeColumn('doctors', 'roomNumber', { transaction }),
      ]),
    ),

  down: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.addColumn(
          'doctors',
          'department',
          {
            allowNull: false,
            type: Sequelize.STRING,
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'doctors',
          'roomNumber',
          {
            type: Sequelize.INTEGER,
            unique: true,
          },
          { transaction },
        ),
      ]),
    ),
};
