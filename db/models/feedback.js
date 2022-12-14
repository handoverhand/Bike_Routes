// 'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Rider, Bikeroute }) {
      // define association here
      Feedback.belongsTo(Rider, { foreignKey: 'riderLoginFB' });
      Feedback.belongsTo(Bikeroute, { foreignKey: 'routeId' });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    comment: {
      type: DataTypes.TEXT,
    },
    grade: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    riderLoginFB: {
      allowNull: false,
      type: DataTypes.TEXT,
      references: {
        model: 'Riders',
        key: 'login',
      },
    },
    routeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Bikeroutes',
        key: 'id',
      },
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
    modelName: 'Feedback',
    tableName: 'Feedbacks',
  };
  Feedback.init(attributes, options);
  return Feedback;
};
