require('dotenv').config();
const path = require('path');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const oas3Tools = require('oas3-tools');

const serverPort = process.env.PORT;
const cors = require('cors');

const mongoString = process.env.DATABASE_URL;

// contect to mongo
mongoose.connect(mongoString,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Project_adw'
});
const database = mongoose.connection;

// swaggerRouter configuration
const options = {
  routing: {
    controllers: path.join(__dirname, './controllers'),
  },
};

const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
const openApiApp = expressAppConfig.getApp();

const app = express();
app.use(/.*/, cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
  );
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  if (req.method === 'OPTIONS') {
    res.status(204).send();
  } else {
    next();
  }
});

for (let i = 2; i < openApiApp._router.stack.length; i++) {
  app._router.stack.push(openApiApp._router.stack[i]);
}

// checking conect
database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, () => {
  console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
  console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});
