const express = require('express');
const stopsController = require('../controllers/stopsController');

const router = express.Router();

router.post('/addStop', stopsController.addStop);

module.exports = router;
