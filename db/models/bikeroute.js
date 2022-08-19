// 'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bikeroute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Rider, Feedback }) {
      // define association here
      Bikeroute.hasMany(Feedback, { foreignKey: 'routeId' });
      Bikeroute.belongsTo(Rider, { foreignKey: 'riderLoginBR' });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.TEXT,
    },
    location: {
      type: DataTypes.TEXT,
    },
    riderLoginBR: {
      // unique: true,
      type: DataTypes.TEXT,
      references: {
        model: 'Riders',
        key: 'login',
      },
    },
    length: {
      type: DataTypes.INTEGER,
    },
    origLat: {
      type: DataTypes.FLOAT,
    },
    origLng: {
      type: DataTypes.FLOAT,
    },
    destLat: {
      type: DataTypes.FLOAT,
    },
    destLng: {
      type: DataTypes.FLOAT,
    },
    img: {
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
    modelName: 'Bikeroute',
    tableName: 'Bikeroutes',
  };
  Bikeroute.init(attributes, options);
  return Bikeroute;
};
