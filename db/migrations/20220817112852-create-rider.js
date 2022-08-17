module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      login: {
        allowNull: false,
        // unique: true,
        type: Sequelize.TEXT,
        // references: {
        //   model: 'Bikeroutes',
        //   key: 'riderLoginBR',
        // },
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
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
    await queryInterface.createTable('Riders', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Riders');
  },
};
