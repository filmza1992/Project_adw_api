require('dotenv').config();
const path = require('path');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const oas3Tools = require('oas3-tools');
const bodyParser = require('body-parser');
const cors = require('cors');

const serverPort = process.env.PORT;
const mongoString = process.env.DATABASE_URL;

// Connect to MongoDB
mongoose.connect(mongoString, {
  dbName: 'Project_adw'
});
const database = mongoose.connection;

// Handle MongoDB connection errors
database.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
database.once('connected', () => {
  console.log('Database Connected');
});

// SwaggerRouter configuration
const options = {
  routing: {
    controllers: path.join(__dirname, './controllers'),
  },
};

// Initialize oas3Tools middleware
const openApiApp = oas3Tools.expressAppConfig(
  path.join(__dirname, 'api/openapi.yaml'),
  options
).getApp();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add oas3Tools middleware
app.use(openApiApp);

// Start the server
http.createServer(app).listen(serverPort, () => {
  console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
  console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});
