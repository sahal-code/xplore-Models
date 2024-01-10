const express = require('express');
const vehiclesController = require('../controllers/vehiclesController');
// const { addVehicle, getAllVehicles } = require('../controllers/vehiclesController');

const router = express.Router();

router.post('/addVehicle', vehiclesController.addVehicle);
router.get('/getAllVehicles', vehiclesController.getAllVehicles)

module.exports = router;


