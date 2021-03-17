'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.changeColumn(
          'users',
          'email',
          {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true,
          },
          {
            transaction,
          },
        ),
      ]),
    ),

  down: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.changeColumn(
          'users',
          'email',
          {
            allowNull: false,
            type: Sequelize.STRING,
          },
          {
            transaction,
          },
        ),
      ]),
    ),
};
