
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UserType = sequelize.define('UserType', {
    user_type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false, 
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return UserType;
};
