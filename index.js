require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const oas3Tools = require('oas3-tools');
const cors = require('cors');

const serverPort = process.env.PORT || 3000; // Use port 3000 if PORT environment variable is not set
const mongoString = process.env.DATABASE_URL;

// Connect to MongoDB
mongoose.connect(mongoString, {
  dbName: 'Project_adw',
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const database = mongoose.connection;

// Handle MongoDB connection errors
database.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
database.once('open', () => {
  console.log('Database Connected');
});

// SwaggerRouter configuration
const options = {
  routing: {
    controllers: path.join(__dirname, './controllers'),
  },
};

// Initialize oas3Tools middleware
const openApiAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, 'api/openapi.yaml'),
  options
);
const openApiApp = openApiAppConfig.getApp();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use oas3Tools middleware
app.use(openApiApp); // Use the OpenAPI app

// Export the app for Cyclic
module.exports = app;
