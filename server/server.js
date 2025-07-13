// server/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./config/db');

// Load environment variables from .env file
dotenv.config({ path: './.env' }); // Keep this explicit path

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route for testing server
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Import Routes
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes'); // UNCOMMENT THIS LINE

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes); // UNCOMMENT THIS LINE

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});