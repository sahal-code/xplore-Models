

const sequelize = require('./sequelize'); 

const AppUser = require('./appUser')(sequelize);
const OwnerUser = require('./ownerUser')(sequelize);
const GPSDevice = require('./gpsDevice')(sequelize);
const TicketingMachine = require('./ticketingMachine')(sequelize);
const Vehicle = require('./vehicle')(sequelize);
const FleetPortalCompanyType = require('./fleetManagement/fleetPortalCompanyType')(sequelize)
const FleetCompany = require('./fleetManagement/fleetCompany')(sequelize)
const Stops = require('./stops')(sequelize);
const VehicleStaffUser = require('./vehicleStaffUser')(sequelize);
//for fleet management
const Trip = require('./fleetManagement/trip')(sequelize)
const FleetCompanyStaff = require('./fleetManagement/fleetCompanyStaff')(sequelize)
const VehicleNew=require('./fleetManagement/vehicle')(sequelize)
const FleetPortalUser = require('./fleetManagement/fleetPortalUser')(sequelize)
const FleetPortalUserType = require('./fleetManagement/fleetPortalUserType')(sequelize)
const Route = require('./fleetManagement/route')(sequelize)
const RouteStopMapping = require('./fleetManagement/routeStopMapping')(sequelize)
const Service = require('./fleetManagement/service')(sequelize)
const StaffRole= require('./fleetManagement/staffRole')(sequelize)
const Stop= require('./fleetManagement/stop')(sequelize)
const UserProfile= require('./fleetManagement/userProfile')(sequelize)

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
  FleetPortalCompanyType,
  FleetCompany,
  Stops,
  Vehicle,
  VehicleStaffUser,
  Trip,
  FleetCompanyStaff,
  VehicleNew,
  FleetPortalUser,
  FleetPortalUserType,
  Route,
  RouteStopMapping,
  Service,
  StaffRole,
  Stop,
  UserProfile
};
