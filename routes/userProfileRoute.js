const express = require('express');
const userProfileController = require('../controllers/userProfileController');

const router = express.Router();


router.get('/:userId', userProfileController.getUserProfile);

module.exports = router;
