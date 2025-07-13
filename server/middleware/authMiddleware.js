// server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const { pool } = require('../config/db'); // To fetch user from DB if needed (though we'll use ID from token)
const dotenv = require('dotenv');

dotenv.config({ path: './.env' }); // Ensure .env is loaded for JWT_SECRET

const protect = async (req, res, next) => {
  let token;

  // Check if token exists in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user ID from token to request (you can fetch full user if needed)
      // For simplicity, we'll just attach the ID from the token.
      // If you need the full user object on every protected route, you'd do:
      // const user = await pool.query('SELECT id, name, email FROM users WHERE id = $1', [decoded.id]);
      // req.user = user.rows[0];
      req.user = { id: decoded.id }; // Attach user ID to the request object

      next(); // Proceed to the next middleware/route handler
    } catch (error) {
      console.error('Not authorized, token failed:', error.message);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };