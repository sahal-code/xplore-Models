const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UserProfile = sequelize.define('UserProfile', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'AppUsers',
        key: 'user_id',
      },
    },
    first_name: {
      type: DataTypes.STRING,
    },
    middle_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email_id: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    profile_photo: {
      type: DataTypes.STRING, 
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return UserProfile;
};
