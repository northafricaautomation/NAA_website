// server/models/User.js
const { pool } = require('../config/db'); // Import the database pool

const User = {
  /**
   * Finds a user by their email.
   * @param {string} email - The email of the user to find.
   * @returns {Promise<Object|null>} The user object if found, otherwise null.
   */
  findByEmail: async (email) => {
    try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error finding user by email:', error.message);
      throw error;
    }
  },

  /**
   * Creates a new user in the database.
   * @param {string} name - The user's name.
   * @param {string} email - The user's email.
   * @param {string} hashedPassword - The hashed password.
   * @returns {Promise<Object>} The newly created user object (id, name, email).
   */
  create: async (name, email, hashedPassword) => {
    try {
      const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
        [name, email, hashedPassword]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Error creating user:', error.message);
      throw error;
    }
  },

  /**
   * Finds a user by their ID.
   * @param {string} id - The ID of the user to find.
   * @returns {Promise<Object|null>} The user object if found, otherwise null.
   */
  findById: async (id) => {
    try {
      const result = await pool.query('SELECT id, name, email FROM users WHERE id = $1', [id]);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error finding user by ID:', error.message);
      throw error;
    }
  }
};

module.exports = User;