"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('image_avatar', 'url', {
      type: Sequelize.DataTypes.STRING,
      allowNull: false, // Defina como false se a coluna não permitir valores nulos
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('image_avatar', 'url');
  },
};
