
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Stops = sequelize.define('Stops', {
    stop_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    stop_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coordinates: {
      type: DataTypes.JSON, 
    },
    city: {
      type: DataTypes.STRING,
    },
    district: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    pincode: {
      type: DataTypes.INTEGER,
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return Stops;
};
