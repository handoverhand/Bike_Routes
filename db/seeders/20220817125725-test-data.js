module.exports = {
  async up(queryInterface, Sequelize) {
    {}
    await queryInterface.bulkInsert('Riders', [{
      login: 'John Doe',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
