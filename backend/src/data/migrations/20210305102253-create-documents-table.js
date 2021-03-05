'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction(transaction => Promise.all([
      queryInterface.createTable('documents',{
        id: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('gen_random_uuid()')
        },
        imagePath: {
          allowNull: false,
          type: Sequelize.STRING
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      }, { transaction })
    ])),
  down: async queryInterface => queryInterface.sequelize
  .transaction(transaction => Promise.all([
    queryInterface => queryInterface.dropTable('documents', { transaction })
  ]))
};
