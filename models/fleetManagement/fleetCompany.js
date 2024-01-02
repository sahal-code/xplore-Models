const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FleetCompany = sequelize.define('FleetCompany', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING,
    },
    company_description: {
      type: DataTypes.TEXT, 
    },
    domain: {
      type: DataTypes.STRING,
    },
    company_type: {
      type: DataTypes.INTEGER,
      references: {
        model: 'FleetPortalCompanyType',
        key: 'id',
      },
    },
    email_id: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    contact: {
      type: DataTypes.BIGINT,
    },
    PAN: {
      type: DataTypes.STRING,
    },
    permit_docs: {
      type: DataTypes.STRING, 
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
    },
    upi_id: {
      type: DataTypes.STRING,
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return FleetCompany;
};


