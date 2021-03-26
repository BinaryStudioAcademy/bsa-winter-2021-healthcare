'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.changeColumn(
          'clinics',
          'imagePath',
          {
            type: Sequelize.STRING,
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
          'clinics',
          'imagePath',
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
