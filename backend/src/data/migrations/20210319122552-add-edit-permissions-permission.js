'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.sequelize.query("ALTER TYPE enum_permissions_name ADD VALUE 'edit-permissions'", { transaction }),
      ])
    ),

  down: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.bulkDelete('permissions', { name: 'edit-permissions' }, { transaction }),
      ]),
    )
};
