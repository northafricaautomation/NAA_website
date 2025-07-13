// server/test_db_connection.js
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

async function testConnection() {
  console.log('Attempting to connect to PostgreSQL...');
  console.log('DB_USER:', process.env.DB_USER);
  console.log('DB_HOST:', process.env.DB_HOST);
  console.log('DB_NAME:', process.env.DB_NAME);
  console.log('DB_PORT:', process.env.DB_PORT);
  console.log('DB_PASSWORD length:', process.env.DB_PASSWORD ? process.env.DB_PASSWORD.length : 'undefined/null');
  console.log('DB_PASSWORD starts with:', process.env.DB_PASSWORD ? process.env.DB_PASSWORD.substring(0, 5) + '...' : 'undefined/null');


  let client;
  try {
    client = await pool.connect();
    console.log('PostgreSQL database connected successfully!');
  } catch (error) {
    console.error('PostgreSQL connection error:', error.message);
    console.error('Full error object:', error);
  } finally {
    if (client) {
      client.release();
      console.log('Client released.');
    }
    await pool.end();
    console.log('Pool ended.');
  }
}

testConnection();