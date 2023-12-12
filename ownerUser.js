
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const OwnerUser = sequelize.define('OwnerUser', {
    owner_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING,
    },
    user_type: {
      type: DataTypes.JSON, 
      allowNull: false,
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
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return OwnerUser;
};
