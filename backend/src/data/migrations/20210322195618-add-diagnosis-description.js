'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.addColumn(
          'diagnoses',
          'description',
          { type: Sequelize.STRING },
          { transaction },
        ),
      ]),
    ),

  down: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.removeColumn('diagnoses', 'description', { transaction }),
      ]),
    ),
};
