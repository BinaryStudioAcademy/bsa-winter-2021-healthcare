'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.bulkInsert(
          'permissions',
          [
            {
              name: 'create-user',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: 'edit-user',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: 'create-clinic',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction },
        ),
      ]),
    ),
  down: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.bulkDelete('permissions', null, { transaction }),
      ]),
    ),
};
