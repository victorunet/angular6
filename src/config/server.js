const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// cors
app.use(cors());

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// connection BD
const dbConnection = require('./dbConnection');
app.set('dbConnection', dbConnection());

// routes default
const routes = require('../app/routes/routes');
app.set('routes', routes);

module.exports = app;
