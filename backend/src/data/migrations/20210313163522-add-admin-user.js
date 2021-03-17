'use strict';
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        bcrypt.hash('Pa55word', SALT_ROUNDS).then((passwordHash) => {
          queryInterface
            .bulkInsert(
              'users',
              [
                {
                  name: 'admin',
                  surname: 'admin',
                  birthdate: new Date(),
                  sex: 'female',
                  type: 'doctor',
                  phone: '+380900000000',
                  email: 'admin@admin.com',
                  password: passwordHash,
                  imagePath:
                    'https://www.pikpng.com/pngl/b/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
              ],
              { transaction, returning: true },
            )
            .then((adminData) => {
              queryInterface.sequelize
                .query('SELECT * FROM permissions')
                .then((data) =>
                  queryInterface.bulkInsert(
                    'users_permissions',
                    data[0].map((permission) => {
                      return {
                        userId: adminData[0].id,
                        permissionId: permission.id,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                      };
                    }),
                  ),
                );
            });
        }),
      ]),
    ),
  down: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.bulkDelete('users', null, { transaction }),
        queryInterface.bulkDelete('users_permissions', null, { transaction }),
      ]),
    ),
};
