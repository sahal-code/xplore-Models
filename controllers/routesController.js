const { Route } = require('../models');


const addRoute = async (req, res) => {
  try {
    const { route_description, additional_info } = req.body;

   
    const newRoute = await Route.create({
      route_description,
      additional_info,
    });

    res.json(newRoute);
  } catch (error) {
    console.error('Error adding route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addRoute,
};
