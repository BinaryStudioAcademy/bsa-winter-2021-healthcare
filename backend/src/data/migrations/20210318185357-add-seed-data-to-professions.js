'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.bulkInsert(
          'professions',
          [
            {
              name: 'pediatrician',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: 'endocrinologist',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: 'dentist',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: 'surgeon',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: 'dermatologist',
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
        queryInterface.bulkDelete('professions', null, { transaction }),
      ]),
    ),
};
