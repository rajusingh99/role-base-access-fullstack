
const express = require('express');
const cors = require('cors');
const { dbConnect } = require('./src/Config/db');
const authRoute = require('./src/Routes/auth');
const scenarioRoute = require('./src/Routes/scenario');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB
dbConnect();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from localhost:3000
  credentials: true // Allow cookies and headers to be sent
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Default route
app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    msg: 'Default Route'
  });
});

// Routes
app.use('/api', authRoute);
app.use('/api', scenarioRoute);

// Start server
app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
});
