module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Bikeroutes', [{
      title: 'Алкомаршрут',
      location: 'с. Бухалово - дер. Похмелино',
      riderLoginBR: 'Топский Павел',
      length: '292',
      origLat: 57.945260,
      origLng: 40.531015,
      destLat: 56.734212,
      destLng: 42.681609,
      img: '/images/country.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Опасный',
      location: 'Тегеран - Багдад',
      riderLoginBR: 'Гриша',
      length: '890',
      origLat: 35.699706,
      origLng: 51.337425,
      destLat: 33.315258,
      destLng: 44.366040,
      img: '/images/шоссе.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Свежесть',
      location: 'Надым - Новый Уренгой',
      riderLoginBR: 'Ваня Хворост',
      length: '240',
      origLat: 65.527025,
      origLng: 72.540055,
      destLat: 66.084539,
      destLng: 76.680956,
      img: '/images/Для летунов.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Bikeroutes', null, {});
  },
};
