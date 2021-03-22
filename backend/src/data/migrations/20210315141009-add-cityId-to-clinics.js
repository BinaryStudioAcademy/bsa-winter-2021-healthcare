'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.addColumn(
          'clinics',
          'cityId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'cities',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          { transaction },
        ),
      ]),
    ),
  down: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.removeColumn('clinics', 'cityId', { transaction }),
      ]),
    ),
};
