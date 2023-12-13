
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const GPSDevice = sequelize.define('GPSDevice', {
    device_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    device_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active_ind: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return GPSDevice;
};
