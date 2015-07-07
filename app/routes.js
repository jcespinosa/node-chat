var express = require('express');
var app = express();

// Load Express Configuration
require('./config/express')(app, express);

// Root route
app.get('/', function(req, res) {
  res.sendFile('index.html', {root: app.settings.views});
});

module.exports = app;
