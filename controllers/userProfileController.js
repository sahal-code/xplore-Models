
const { UserProfile } = require('../models');

const getUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId; 

    
    const userProfile = await UserProfile.findOne({
      where: { user_id: userId },
    });

    if (!userProfile) {
      return res.status(404).json({ error: 'User profile not found' });
    }

    res.json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: error.message, stack: error.stack });
  }
};

module.exports = {
  getUserProfile,
};
