// 'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT,
      },
      location: {
        type: Sequelize.TEXT,
      },
      riderLoginBR: {
        // unique: true,
        type: Sequelize.TEXT,
        references: {
          model: 'Riders',
          key: 'login',
        },
      },
      length: {
        type: Sequelize.INTEGER,
      },
      origLat: {
        type: Sequelize.FLOAT,
      },
      origLng: {
        type: Sequelize.FLOAT,
      },
      destLat: {
        type: Sequelize.FLOAT,
      },
      destLng: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    };
    await queryInterface.createTable('Bikeroutes', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Bikeroutes');
  },
};
