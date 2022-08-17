module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Feedbacks', [{
      comment: 'Зашло!',
      grade: 5,
      riderLoginFB: 'John Doe',
      routeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      comment: 'Пойдет...',
      grade: 3,
      riderLoginFB: 'Иван Иванов',
      routeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      comment: 'Не очень.',
      grade: 2,
      riderLoginFB: 'Сергей Петров',
      routeId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Feedbacks', null, {});
  },
};
