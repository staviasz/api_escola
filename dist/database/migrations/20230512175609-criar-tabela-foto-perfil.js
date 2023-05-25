"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('image_avatar', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIcrement: true,
        primaryKey: true,
      },
      orininalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => queryInterface.dropTable('image_avatar'),
};
