module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Feedbacks', [{
      comment: 'Сильно не топите, пацаны',
      grade: 5,
      riderLoginFB: 'Гриша',
      routeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      comment: 'Было сложно, но я вывез',
      grade: 4,
      riderLoginFB: 'Ваня Хворост',
      routeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      comment: 'Стреляют, но ездить можно',
      grade: 3,
      riderLoginFB: 'Топский Павел',
      routeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      comment: 'Салам Алейкум братьям с Ингушетии',
      grade: 3,
      riderLoginFB: 'Ваня Хворост',
      routeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      comment: 'Газуйте доталго, мужики',
      grade: 3,
      riderLoginFB: 'Гриша',
      routeId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      comment: 'Сделаем красиво, мы же за Россию',
      grade: 2,
      riderLoginFB: 'Топский Павел',
      routeId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Feedbacks', null, {});
  },
};
