// server/controllers/dashboardController.js
const User = require('../models/User'); // Import the User model

// @desc    Get user profile data
// @route   GET /api/dashboard/profile
// @access  Private
exports.getUserProfile = async (req, res) => {
  // req.user.id is attached by the protect middleware
  try {
    const user = await User.findById(req.user.id);

    if (user) {
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        message: 'Welcome to your dashboard!' // Example protected data
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user profile:', error.message);
    res.status(500).send('Server error');
  }
};