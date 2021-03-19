'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
      .then(() =>
        queryInterface.sequelize.transaction((transaction) =>
          Promise.all([
            queryInterface.createTable(
              'users',
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
                },
                surname: {
                  allowNull: false,
                  type: Sequelize.STRING,
                },
                birthdate: {
                  allowNull: false,
                  type: Sequelize.DATE,
                },
                sex: {
                  allowNull: false,
                  type: Sequelize.ENUM('male', 'female'),
                },
                type: {
                  allowNull: false,
                  type: Sequelize.ENUM('doctor', 'patient'),
                },
                phone: {
                  allowNull: false,
                  type: Sequelize.STRING,
                },
                email: {
                  allowNull: false,
                  type: Sequelize.STRING,
                  unique: true,
                },
                password: {
                  allowNull: false,
                  type: Sequelize.STRING,
                },
                imagePath: {
                  allowNull: false,
                  type: Sequelize.STRING,
                },
                diagnosis: {
                  type: Sequelize.UUID,
                },
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE,
              },
              { transaction },
            ),
          ]),
        ),
      ),

  down: async (queryInterface) => {
    return queryInterface.sequelize.transaction((transaction) => {
      return Promise.all([
        queryInterface.dropTable('users', { transaction }),
        queryInterface.sequelize.query('DROP TYPE "enum_users_sex"', { transaction }),
        queryInterface.sequelize.query('DROP TYPE "enum_users_type"', { transaction }),
      ]);
    });
  },
};
