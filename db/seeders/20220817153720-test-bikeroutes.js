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
      location: 'Дамаск - Газа',
      riderLoginBR: 'Гриша',
      length: '890',
      origLat: 33.524142,
      origLng: 36.318546,
      destLat: 31.522840,
      destLng: 34.455943,
      img: '/images/шоссе.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Свежесть',
      location: 'Салехард - Воркута',
      riderLoginBR: 'Ваня Хворост',
      length: '330',
      origLat: 66.529866,
      origLng: 66.614507,
      destLat: 67.493504,
      destLng: 64.050113,
      img: '/images/Для летунов.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Bikeroutes', null, {});
  },
};
