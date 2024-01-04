const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FleetCompanyStaff = sequelize.define('FleetCompanyStaff', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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
    fleet_owner: {
      type: DataTypes.INTEGER,
      references: {
        model: 'FleetCompanies',
        key: 'id',
      },
    },
    staff_role: {
      type: DataTypes.INTEGER,
      references: {
        model: 'StaffRoles',
        key: 'id',
      },
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

  return FleetCompanyStaff;
};
