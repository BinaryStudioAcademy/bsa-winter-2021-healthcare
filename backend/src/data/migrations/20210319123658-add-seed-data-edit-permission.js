'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.bulkInsert(
          'permissions',
          [{
            name: 'edit-permissions',
            createdAt: new Date(),
            updatedAt: new Date(),
          }, ], {
            transaction,
            returning: true
          },
        ).then((permission) => {
          queryInterface.sequelize
            .query(`SELECT * FROM users WHERE email = 'admin@admin.com'`)
            .then(admin =>
              queryInterface.bulkInsert(
                'users_permissions',
                [{
                  userId: admin[0][0].id,
                  permissionId: permission[0].id,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },],
                {
                  transaction
                },
              )
            )
        })
      ]),
    ),
    down: async (queryInterface, Sequelize, transaction) =>
    queryInterface.sequelize.transaction(() =>
      Promise.all([
        queryInterface.sequelize
        .query(`SELECT * FROM users WHERE email = 'admin@admin.com'`)
          .then(userData => adminId = userData[0][0].id)
          .then(() =>
            queryInterface.sequelize.query(`SELECT * FROM permissions WHERE name = 'edit-permissions'`),
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
