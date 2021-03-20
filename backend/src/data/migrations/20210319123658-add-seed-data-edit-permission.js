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
            .query('SELECT * FROM users')
            .then((users) => {
              const adminData = users[0].filter((user) => user.email === 'admin@admin.com');
              return queryInterface.bulkInsert(
                'users_permissions', 
                [{
                  userId: adminData[0].id,
                  permissionId: permission[0].id,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                }]
              )
            }).catch((e) => {
              console.log(e)
            });
        })
      ]),
    ),
  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.bulkDelete('permissions', {
          [Op.or]: [{
            name: 'edit-permissions'
          }, {
            name: 'edit-permissions'
          }]
        }, {
          transaction
        }),
      ]),
    )
  }
};
