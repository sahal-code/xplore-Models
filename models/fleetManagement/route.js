const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Route = sequelize.define('Route', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    route_description: {
      type: DataTypes.STRING,
    },
    // stop_list: {
    //   type: DataTypes.ARRAY(DataTypes.INTEGER),
     
    //   references: {
    //     model: 'Stops',
    //     key: 'id',
    //   },
    // },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return Route;
};
