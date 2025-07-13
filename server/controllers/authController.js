// server/controllers/authController.js
const { pool } = require('../config/db'); // Already imported for direct queries, but we'll use User model
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwtUtils'); // Import generateToken
const User = require('../models/User'); // Import the User model

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists using User model
    const userExists = await User.findByEmail(email);
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user using User model
    const newUser = await User.create(name, email, hashedPassword);

    // Generate JWT
    const token = generateToken(newUser.id); // Use generateToken utility

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
      token,
    });

  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).send('Server error');
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists using User model
    const user = await User.findByEmail(email);
    if (!user) { // If user not found
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = generateToken(user.id); // Use generateToken utility

    res.json({
      message: 'Logged in successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    });

  } catch (error) {
    console.error('Error logging in user:', error.message);
    res.status(500).send('Server error');
  }
};