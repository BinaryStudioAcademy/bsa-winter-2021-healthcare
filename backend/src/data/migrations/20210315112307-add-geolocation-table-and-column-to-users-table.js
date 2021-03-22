'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction((transaction) =>
      queryInterface.createTable(
        'geolocation',
        {
          id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal('gen_random_uuid()'),
          },
          lat: {
            allowNull: false,
            type: Sequelize.DOUBLE,
          },
          lng: {
            allowNull: false,
            type: Sequelize.DOUBLE,
          },
          userId: {
            type: Sequelize.UUID,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE,
        },
        { transaction },
      ),
    );

    await queryInterface.sequelize.transaction((transaction) =>
      queryInterface.addColumn(
        'users',
        'geolocationId',
        {
          type: Sequelize.UUID,
          references: {
            model: 'geolocation',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        { transaction },
      ),
    );
  },

  down: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.removeColumn('users', 'geolocationId', { transaction }),
        queryInterface.dropTable('geolocation', { transaction }),
      ]),
    ),
};
