"use strict";module.exports = {
  up: async (queryInterface) => {
    await queryInterface.renameColumn(
      'image_avatar',
      'orininalname',
      'originalname',
    );
  },

  down: async (queryInterface) => {
    await queryInterface.renameColumn(
      'image_avatar',
      'originalname',
      'orininalname',
    );
  },
};
