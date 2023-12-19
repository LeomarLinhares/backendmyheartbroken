'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('reasons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reason: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('reasons');
  }
};
