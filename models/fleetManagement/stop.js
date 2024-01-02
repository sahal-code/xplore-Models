

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Stop = sequelize.define('Stop', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    stop_name: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.INTEGER,
    },
    longitude: {
      type: DataTypes.INTEGER,
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
    stop_owner: {
      type: DataTypes.INTEGER,
      references: {
        model: 'FleetCompany',
        key: 'id',
      },
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return Stop;
};
