const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const StaffRole = sequelize.define('StaffRole', {
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

  return StaffRole;
};

const services=require('service.js../models')
const route =require('route.js../models')
