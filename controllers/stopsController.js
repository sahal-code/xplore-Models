const { Stop } = require('../models');

const addStop = async (req, res) => {
  try {
    const {
      stop_name,
      latitude,
      longitude,
      city,
      district,
      state,
      pincode,
      stop_owner,
      additional_info,
    } = req.body;

    const newStop = await Stop.create({
      stop_name,
      latitude,
      longitude,
      city,
      district,
      state,
      pincode,
      stop_owner,
      additional_info,
    });

    console.log('New Stop Added:', newStop);

    res.json(newStop);
  } catch (error) {
    console.error('Error adding stop:', error);
    res.status(500).json({ error: error.message, stack: error.stack });
  }
};

const getAllStops = async (req, res) => {
  try {
    const stops = await Stop.findAll();
    res.json(stops);
  } catch (error) {
    console.error('Error fetching stops:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  addStop,
  getAllStops,
};
