module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      comment: {
        type: Sequelize.TEXT,
      },
      grade: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      riderLoginFB: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      routeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.createTable('Feedbacks', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Feedbacks');
  },
};
