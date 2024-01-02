const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Service = sequelize.define('Service', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    service_name: {
      type: DataTypes.STRING,
    },
    reservation: {
      type: DataTypes.BOOLEAN,
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return Service;
};
