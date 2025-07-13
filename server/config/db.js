// server/config/db.js
const { Pool } = require('pg');
const dotenv = require('dotenv');

// Explicitly tell dotenv where to find the .env file
dotenv.config({ path: './.env' }); // <--- CHANGE THIS LINE

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('PostgreSQL database connected successfully!');
  } catch (error) {
    console.error('PostgreSQL connection error:', error.message);
    process.exit(1);
  }
};

module.exports = {
  pool,
  connectDB
};