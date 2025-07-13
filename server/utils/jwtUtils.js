// server/utils/jwtUtils.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' }); // Ensure .env is loaded for JWT_SECRET

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN, // e.g., '1h', '7d'
  });
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error('JWT verification failed:', error.message);
    return null; // Token is invalid or expired
  }
};

module.exports = {
  generateToken,
  verifyToken,
};