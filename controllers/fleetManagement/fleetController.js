const { FleetCompany,FleetPortalUser } = require('../../models/fleetManagement/fleetCompany');

const addFleetCompany = async (req, res) => {
  try {
    const {
      company_name,
      company_description,
      domain,
      company_type,
      email_id,
      contact,
      PAN,
      permit_docs,
      is_verified,
      upi_id,
      additional_info,
    } = req.body;

    const newFleetCompany = await FleetCompany.create({
      company_name,
      company_description,
      domain,
      company_type,
      email_id,
      contact,
      PAN,
      permit_docs,
      is_verified,
      upi_id,
      additional_info,
    });

    res.json(newFleetCompany);
  } catch (error) {
    console.error('Error adding Fleet Company:', error);
    res.status(500).json({ error: error.message, stack: error.stack });
  }
};

const addFleetPortalUser = async (req, res) => {
    try {
      const {
        username,
        password,
        user_type,
        company_id,
        additional_info,
      } = req.body;
  
      const newFleetPortalUser = await FleetPortalUser.create({
        username,
        password,
        user_type,
        company_id,
        additional_info,
      });
  
      res.json(newFleetPortalUser);
    } catch (error) {
      console.error('Error adding Fleet Portal User:', error);
      res.status(500).json({ error: error.message, stack: error.stack });
    }
  };

module.exports = {
  addFleetCompany,
  addFleetPortalUser,
};


