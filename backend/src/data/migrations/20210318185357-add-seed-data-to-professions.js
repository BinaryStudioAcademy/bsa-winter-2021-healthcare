'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.bulkInsert(
          'professions',
          [
            {
              name: 'Pediatrician',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: 'Endocrinologist',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: 'Dentist',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: 'Surgeon',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: 'Dermatologist',
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
