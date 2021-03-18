'use strict';
const now = new Date();

const usersSeed = [
  {
    text: 'Conditions Treated',
  },
  {
    text: 'Chest Wall Deformities',
  },
  {
    text: 'General Pediatric Surgery',
  },
  {
    text: 'Neonatal Minimally Invasive Surgery',
  },
  {
    text: 'Pediatric Adrenal Masses',
  },
  {
    text: 'Pediatric Parathyroid Tumors',
  },
  {
    text: 'Pediatric Thyroid Tumors',
  },
  {
    text: 'Thoracic Pediatric Surgery',
  },
].map((specialization) => ({
  ...specialization,
  createdAt: now,
  updatedAt: now,
}));
module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
      .then(() =>
        queryInterface.sequelize.transaction((transaction) =>
          Promise.all([
            queryInterface.bulkInsert('specializations', usersSeed, {
              transaction,
            }),
          ]),
        ),
      ),

  down: async (queryInterface) => {
    return queryInterface.sequelize.transaction((transaction) => {
      return Promise.all([
        queryInterface.dropTable('specializations', { transaction }),
      ]);
    });
  },
};
