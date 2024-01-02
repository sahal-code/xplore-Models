const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Trip = sequelize.define('Trip', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    trip_name: {
      type: DataTypes.STRING,
    },
    vehicle: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Vehicle',
        key: 'id',
      },
    },
    route: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Route',
        key: 'id',
      },
    },
    schedule_days: {
      type: DataTypes.JSON,
    },
    start_time: {
      type: DataTypes.TIME,
    },
    end_time: {
      type: DataTypes.TIME,
    },
    driver: {
      type: DataTypes.INTEGER,
      references: {
        model: 'FleetCompanyStaff',
        key: 'id',
      },
    },
    conductor: {
      type: DataTypes.INTEGER,
      references: {
        model: 'FleetCompanyStaff',
        key: 'id',
      },
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return Trip;
};
