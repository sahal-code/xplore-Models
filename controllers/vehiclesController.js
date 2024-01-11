const { Vehicle } = require('../models');
// const { Vehicle } = require('../models/fleetManagement/vehicle.js')
 
// Add a vehicle



const addVehicle = async (req, res) => {
  try {
    const {
      vehicle_number,
      vehicle_description,
      permit_number,
      capacity,
      gps_id,
      service,
      fleet_owner,
      additional_info,
    } = req.body;

    const newVehicle = await Vehicle.create({
      vehicle_number,
      vehicle_description,
      permit_number,
      capacity,
      gps_id,
      service,
      fleet_owner,
      additional_info,
    });

    console.log('New Vehicle Added:', newVehicle);

    res.json(newVehicle);
  } catch (error) {
    console.error('Error adding vehicle:', error);
    res.status(500).json({ error: error.message, stack: error.stack });
  }
};


const getVehicleById = async (req, res) => {
  try {
    const { vehicleId } = req.params;

    // Fetch the vehicle by ID
    const vehicle = await Vehicle.findByPk(vehicleId);

    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    res.json(vehicle);
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


// const addVehicle = async (req, res) => {
//   try {
//     const {
//       vehicle_no,
//       pos_id,
//       vehicle_desc,
//       permit_nbr,
//       fleet_owner,
//       additional_info,
//     } = req.body;

  


//     const newVehicle = await Vehicle.create({
//       vehicle_no,
//       pos_id,
//       vehicle_desc,
//       permit_nbr,
//       fleet_owner,
//       additional_info,
//     });

//     console.log('New Vehicle Added:', newVehicle);

//     res.json(newVehicle);
//   } catch (error) {
//     console.error('Error adding vehicle:', error);


//     res.status(500).json({ error: error.message, stack: error.stack });
//   }
// };

const getAllVehicles = async (req, res) => {
    try {
      // Fetch all vehicles
      const vehicles = await Vehicle.findAll();
  
      res.json(vehicles);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      res.status(500).send('Internal Server Error');
    }
  }


module.exports = {
  addVehicle,
  getAllVehicles,
  getVehicleById,
};

