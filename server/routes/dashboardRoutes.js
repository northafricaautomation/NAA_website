// server/routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController'); // We'll create this next
const { protect } = require('../middleware/authMiddleware'); // Import the protect middleware

// @route   GET /api/dashboard/profile
// @desc    Get user profile data (protected route)
// @access  Private
router.get('/profile', protect, dashboardController.getUserProfile);

module.exports = router;