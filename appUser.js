
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const AppUser = sequelize.define('AppUser', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middle_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    phone: {
      type: DataTypes.BIGINT,
    },
    profile_photo: {
      type: DataTypes.STRING, 
    },
    otp_receive_time: {
      type: DataTypes.DATE,
    },
    verification_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return AppUser;
};
