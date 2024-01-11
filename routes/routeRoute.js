const express = require('express');
const routesController = require('../controllers/routesController');

const router = express.Router();


router.post('/addRoute', routesController.addRoute);

module.exports = router;
