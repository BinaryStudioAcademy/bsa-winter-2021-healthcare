'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.createTable(
          'documents',
          {
            id: {
              allowNull: false,
              autoIncrement: false,
              primaryKey: true,
              type: Sequelize.UUID,
              defaultValue: Sequelize.literal('gen_random_uuid()'),
            },
            imagePath: {
              allowNull: false,
              type: Sequelize.STRING,
            },
            status: {
              allowNull: false,
              type: Sequelize.ENUM('verified', 'in_review'),
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
        queryInterface.dropTable('documents', { transaction }),
        queryInterface.sequelize.query('DROP TYPE "enum_documents_status"', { transaction }),
      ]),
    ),
};
