

const sequelize = require('./sequelize'); 

const AppUser = require('./appUser')(sequelize);
const OwnerUser = require('./ownerUser')(sequelize);
const GPSDevice = require('./gpsDevice')(sequelize);
const TicketingMachine = require('./ticketingMachine')(sequelize);
const Stops = require('./stops')(sequelize);
const Vehicle = require('./vehicle')(sequelize);
const VehicleStaffUser = require('./vehicleStaffUser')(sequelize);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database and tables synced!');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  })

module.exports = {
  AppUser,
  OwnerUser,
  GPSDevice,
  TicketingMachine,
  Stops,
  Vehicle,
  VehicleStaffUser,
};
