module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Bikeroutes', [{
      title: 'Лютый маршрут',
      location: 'Новый Уренгой',
      riderLoginBR: 'John Doe',
      length: '50',
      origLat: 123.234,
      origLng: 456.678,
      destLat: 645.609,
      destLng: 426.678,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Прелестный',
      location: 'Москва',
      riderLoginBR: 'Иван Иванов',
      length: '20',
      origLat: 125.254,
      origLng: 466.658,
      destLat: 675.689,
      destLng: 486.688,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Легкий',
      location: 'Гусь-Хрустальный',
      riderLoginBR: 'Сергей Петров',
      length: '10',
      origLat: 124.254,
      origLng: 256.638,
      destLat: 645.607,
      destLng: 476.688,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Bikeroutes', null, {});
  },
};
