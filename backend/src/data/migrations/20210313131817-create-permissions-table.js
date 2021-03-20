'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.createTable(
          'permissions',
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
              type: Sequelize.ENUM('create-user', 'edit-user', 'create-clinic'),
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
        queryInterface.dropTable('permissions', { transaction }),
        queryInterface.sequelize.query('DROP TYPE "enum_permissions_name"', { transaction }),
      ]),
    ),
};
