'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.createTable(
          'clinics',
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
              type: Sequelize.STRING,
              unique: true,
            },
            address: {
              allowNull: false,
              type: Sequelize.STRING,
              unique: true,
            },
            imagePath: {
              allowNull: false,
              type: Sequelize.STRING,
            },
            clinicType: {
              allowNull: false,
              type: Sequelize.ENUM('private', 'state'),
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
        queryInterface.dropTable('clinics', { transaction }),
        queryInterface.sequelize.query('DROP TYPE "enum_clinics_clinicType"', { transaction }),
      ]),
    ),
};
