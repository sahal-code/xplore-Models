const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Vehicle = sequelize.define('Vehicle', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    vehicle_number: {
      type: DataTypes.STRING,
    },
    vehicle_description: {
      type: DataTypes.TEXT,
    },
    permit_number: {
      type: DataTypes.STRING,
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
    pos_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'TicketingMachineUser',
        key: 'id',
      },
    },
    gps_id: {
      type: DataTypes.INTEGER,
      
      references: {
        model: 'GPSDevice',
        key: 'id',
      },
    },
    service: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Service',
        key: 'id',
      },
    },
    fleet_owner: {
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

  return Vehicle;
};
