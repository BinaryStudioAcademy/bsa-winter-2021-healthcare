'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.addColumn(
          'diagnoses',
          'userId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'notifications',
          'userId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'notifications',
          'to',
          {
            type: Sequelize.UUID,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'messages',
          'userId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'messages',
          'to',
          {
            type: Sequelize.UUID,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'appointments',
          'userId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'appointments',
          'doctorId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'doctors',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'doctors',
          'userId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'doctors',
          'clinicId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'clinics',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          { transaction },
        ),
        queryInterface.addColumn(
          'doctors',
          'documentId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'documents',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          { transaction },
        ),
      ]),
    ),
  down: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.removeColumn('diagnoses', 'userId', { transaction }),
        queryInterface.removeColumn('notifications', 'userId', { transaction }),
        queryInterface.removeColumn('notifications', 'to', { transaction }),
        queryInterface.removeColumn('messages', 'userId', { transaction }),
        queryInterface.removeColumn('messages', 'to', { transaction }),
        queryInterface.removeColumn('appointments', 'userId', { transaction }),
        queryInterface.removeColumn('appointments', 'doctorId', {
          transaction,
        }),
        queryInterface.removeColumn('doctors', 'userId', { transaction }),
        queryInterface.removeColumn('doctors', 'clinicId', { transaction }),
        queryInterface.removeColumn('doctors', 'documentId', { transaction }),
      ]),
    ),
};
