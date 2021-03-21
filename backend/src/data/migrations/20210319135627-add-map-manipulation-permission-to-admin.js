'use strict';

let adminId;
let permissionId;

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.sequelize
          .query(`
            SELECT * FROM users
            WHERE
            name = 'admin'
          `)
          .then(userData => adminId = userData[0][0].id)
          .then(() =>
            queryInterface.sequelize.query(`
              SELECT * FROM permissions
              WHERE
              name = 'map-manipulation'
            `),
          )
          .then(
            permissions => {
              permissionId = permissions[0][0].id;
              queryInterface.bulkInsert(
                'users_permissions',
                [
                  {
                    userId: adminId,
                    permissionId: permissionId,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                  },
                ],
                { transaction },
              );
            },
          ),
      ]),
    ),
  down: async (queryInterface, Sequelize, transaction) =>
    queryInterface.sequelize.transaction(() =>
      Promise.all([
        queryInterface.sequelize
          .query(`
            SELECT * FROM users
            WHERE
            name = 'admin'
          `)
          .then(userData => adminId = userData[0][0].id)
          .then(() =>
            queryInterface.sequelize.query(`
              SELECT * FROM permissions
              WHERE
              name = 'map-manipulation'
            `),
          )
          .then(
            permissions => {
              permissionId = permissions[0][0].id;
              const Op = Sequelize.Op;
              queryInterface.bulkDelete(
                'users_permissions',
                {
                  [Op.and]: [{ userId: adminId }, { permissionId: permissionId }],
                },
                { transaction },
              );
            },
          ),
      ]),
    ),
};
