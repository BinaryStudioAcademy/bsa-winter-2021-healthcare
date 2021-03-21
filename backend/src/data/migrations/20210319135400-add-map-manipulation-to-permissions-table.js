'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.bulkInsert(
          'permissions',
          [
            {
              name: 'map-manipulation',
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
        queryInterface.bulkDelete('permissions', { name: 'map-manipulation' }, { transaction }),
      ]),
    ),
};
