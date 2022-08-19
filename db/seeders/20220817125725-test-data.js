module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Riders', [{
      login: 'Топский Павел',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      login: 'Гриша',
      password: 'qwerty',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      login: 'Ваня Хворост',
      password: '098765',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Riders', null, {});
  },
};
