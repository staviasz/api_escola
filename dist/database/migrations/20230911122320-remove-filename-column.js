"use strict";module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('image_avatar', 'filename');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('image_avatar', 'filename', {
      type: Sequelize.STRING, // Defina o tipo do campo
      allowNull: true, // Defina se o campo pode ser nulo ou não
    });
  },
};
