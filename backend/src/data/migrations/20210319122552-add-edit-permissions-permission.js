'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.sequelize.query(
          "ALTER TYPE enum_permissions_name ADD VALUE 'edit-permissions'",
          { transaction },
        ),
      ]),
    ),

  down: async (queryInterface) =>
    queryInterface.sequelize.query(`
      DELETE
      FROM
          pg_enum
      WHERE
          enumlabel = 'edit-permissions' AND
          enumtypid = (
              SELECT
                  oid
              FROM
                  pg_type
              WHERE
                  typname = 'enum_permissions_name'
          )
    `),
};
