'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction(transaction => Promise.all([
      queryInterface.createTable('users_specializations', {
        userId: {
          type: Sequelize.UUID,
          references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
        specializationId: {
          type: Sequelize.UUID,
          references: {
            model: 'specializations',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      }, { transaction })
    ])),
  down: async queryInterface => queryInterface.sequelize
    .transaction(transaction => Promise.all([
      queryInterface.dropTable('users_specializations', { transaction })
    ]))
};
