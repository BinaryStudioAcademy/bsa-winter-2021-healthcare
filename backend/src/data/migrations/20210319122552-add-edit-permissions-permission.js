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
        queryInterface.sequelize.query(
          "ALTER TYPE enum_permissions_name RENAME TO enum_permissions_name_old;\
          CREATE TYPE enum_permissions_name AS ENUM('create-user', 'edit-user', 'create-clinic');\
          ALTER TABLE permissions ALTER COLUMN name TYPE enum_permissions_name USING name::text::enum_permissions_name;\
          DROP TYPE enum_permissions_name_old;",
          { transaction }),
      ])
    )
};
