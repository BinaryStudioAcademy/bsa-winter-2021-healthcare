'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.createTable(
          'appointments',
          {
            id: {
              allowNull: false,
              autoIncrement: false,
              primaryKey: true,
              type: Sequelize.UUID,
              defaultValue: Sequelize.literal('gen_random_uuid()'),
            },
            date: {
              allowNull: false,
              type: Sequelize.DATE,
            },
            type: {
              allowNull: false,
              type: Sequelize.ENUM('online', 'offline'),
            },
            cost: Sequelize.FLOAT,
            subject: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
          },
          { transaction },
        ),
      ]),
    ),
  down: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.dropTable('appointments', { transaction }),
        queryInterface.sequelize.query('DROP TYPE "enum_appointments_type"', { transaction }),
      ]),
    ),
};
