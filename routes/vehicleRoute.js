const express = require('express');
const vehiclesController = require('../controllers/vehiclesController');
// const { addVehicle, getAllVehicles } = require('../controllers/vehiclesController');
const fleetController = require('../controllers/fleetManagement/fleetController');

const router = express.Router();

router.post('/addVehicle', vehiclesController.addVehicle);
router.get('/getAllVehicles', vehiclesController.getAllVehicles)
router.post('/addFleetCompany', fleetController.addFleetCompany)
router.post('/addFleetPortalUser', fleetController.addFleetPortalUser);
router.get('/:vehicleId', vehiclesController.getVehicleById);

module.exports = router;


