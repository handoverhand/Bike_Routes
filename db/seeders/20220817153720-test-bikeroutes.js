module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Bikeroutes', [{
      title: 'Лютый маршрут',
      location: 'Новый Уренгой',
      riderLoginBR: 'John Doe',
      length: '50',
      origLat: 59.94,
      origLng: 30.31,
      destLat: 59.9,
      destLng: 29.09,
      img: '/images/country.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Прелестный',
      location: 'Москва',
      riderLoginBR: 'Иван Иванов',
      length: '20',
      origLat: 55.75,
      origLng: 37.62,
      destLat: 55.58,
      destLng: 42.04,
      img: '/images/шоссе.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Легкий',
      location: 'Гусь-Хрустальный',
      riderLoginBR: 'Сергей Петров',
      length: '10',
      origLat: 43.6,
      origLng: 39.73,
      destLat: 45.04,
      destLng: 38.98,
      img: '/images/Для летунов.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Bikeroutes', null, {});
  },
};
