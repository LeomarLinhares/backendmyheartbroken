'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
    [{
      id: 1,
      name: 'Lewis',
      email: 'lewishamilton@gmail.com',
      password: '123456',
    },
    {
      id: 2,
      name: 'Michaek',
      email: 'MichaelSchumacher@gmail.com',
      password: '123456',
    },
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
