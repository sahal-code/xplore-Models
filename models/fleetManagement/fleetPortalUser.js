const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FleetPortalUser = sequelize.define('FleetPortalUser', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    user_type: {
      type: DataTypes.INTEGER,
      references: {
        model: 'FleetPortalUserType',
        key: 'id',
      },
    },
    company_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'FleetCompany',
        key: 'id',
      },
    },
    created_at: {
      type: DataTypes.DATE,
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return FleetPortalUser;
};
