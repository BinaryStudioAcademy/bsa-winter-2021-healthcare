'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.createTable(
          'professions',
          {
            id: {
              allowNull: false,
              autoIncrement: false,
              primaryKey: true,
              type: Sequelize.UUID,
              defaultValue: Sequelize.literal('gen_random_uuid()'),
            },
            name: {
              allowNull: false,
              type: Sequelize.ENUM('pediatrician', 'endocrinologist', 'dentist', 'surgeon', 'dermatologist'),
              unique: true,
            },
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
        queryInterface.dropTable('professions', { transaction }),
        queryInterface.sequelize.query('DROP TYPE "enum_professions_name"', { transaction }),
      ]),
    ),
};
