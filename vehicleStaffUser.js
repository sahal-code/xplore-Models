
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const VehicleStaffUser = sequelize.define('VehicleStaffUser', {
    staff_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fleet_owner: {
      type: DataTypes.JSON, 
    },
    user_type: {
      type: DataTypes.JSON, 
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
    otp_receive_time: {
      type: DataTypes.DATE,
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return VehicleStaffUser;
};
