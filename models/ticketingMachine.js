
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TicketingMachine = sequelize.define('TicketingMachine', {
    machine_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fleet_owner: {
      type: DataTypes.JSON, 
    },
    additional_info: {
      type: DataTypes.JSON,
    },
  });

  return TicketingMachine;
};
