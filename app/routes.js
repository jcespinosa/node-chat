var express = require('express');
var app = express();
var path = require('path');

// Load Express Configuration
require('./config/express')(app, express);

// Root route
app.get('/chat', function(req, res) {
  res.render('index');
});

// Root route
app.get('/about', function(req, res) {
  res.sendFile('about.html', {root: path.join(__dirname, '../public')});
});

module.exports = app;
