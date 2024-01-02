const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FleetPortalUserType = sequelize.define('FleetPortalUserType', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT, 
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return FleetPortalUserType;
};
