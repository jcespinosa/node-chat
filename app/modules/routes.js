var express = require('express');
var app = express();

// Load Express Configuration
require('./config')(app, express);

// Root route
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

module.exports = app;
