'use strict';

module.exports = {
  up: (queryInterface) =>
    queryInterface.sequelize.query('ALTER TYPE "enum_permissions_name" ADD VALUE \'map-manipulation\''),

  down: (queryInterface) =>
    queryInterface.sequelize.query(`
      DELETE
      FROM
          pg_enum
      WHERE
          enumlabel = 'map-manipulation' AND
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
