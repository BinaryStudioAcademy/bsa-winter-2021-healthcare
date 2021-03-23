'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface
          .bulkInsert(
            'permissions',
            [
              {
                name: 'edit-permissions',
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
        queryInterface.bulkDelete(
          'permissions',
          { name: 'edit-permissions' },
          { transaction },
        ),
      ]),
    ),
};
