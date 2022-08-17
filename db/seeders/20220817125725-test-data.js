module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Riders', [{
      login: 'John Doe',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      login: 'Иван Иванов',
      password: 'qwerty',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      login: 'Сергей Петров',
      password: '098765',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Riders', null, {});
  },
};
