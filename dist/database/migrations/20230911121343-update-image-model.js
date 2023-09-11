"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('image_avatar', 'cloudinary_url', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('image_avatar', 'cloudinary_url');
  },
};
