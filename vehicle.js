
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Vehicle = sequelize.define('Vehicle', {
    vehicle_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    vehicle_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pos_id: {
      type: DataTypes.STRING,
    },
    vehicle_desc: {
      type: DataTypes.TEXT, 
    },
    permit_nbr: {
      type: DataTypes.STRING,
    },
    fleet_owner: {
      type: DataTypes.JSON, 
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return Vehicle;
};
