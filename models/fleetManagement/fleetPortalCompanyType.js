const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FleetPortalCompanyType = sequelize.define('FleetPortalCompanyType', {
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

  return FleetPortalCompanyType;
};
