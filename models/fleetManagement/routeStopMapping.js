const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RouteStopMapping = sequelize.define('RouteStopMapping', {
    route_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Route',
        key: 'id',
      },
    },
    stop_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Stop',
        key: 'id',
      },
    },
    stop_number: {
      type: DataTypes.INTEGER,
    },
    scheduled_arrival_time: {
      type: DataTypes.TIME,
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return RouteStopMapping;
};