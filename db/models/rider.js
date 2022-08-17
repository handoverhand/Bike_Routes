const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Feedback, Bikeroute }) {
      // define association here
      // Rider.hasMany(Feedback, { foreignKey: 'riderLoginFB' });
      // Rider.hasMany(Bikeroute, { foreignKey: 'riderLoginBR' });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    login: {
      allowNull: false,
      // unique: true,
      type: DataTypes.TEXT,
      // references: {
      //   model: 'Bikeroute',
      //   key: 'riderLoginBR',
      // },
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
  const options = {
    sequelize,
    modelName: 'Rider',
    tableName: 'Riders',
  };
  Rider.init(attributes, options);
  return Rider;
};
