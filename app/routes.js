var express = require('express');
var app = express();
var paths = require('./config/paths');

// Load Express Configuration
require('./config/express')(app, express);

// Load controllers
var HomeController = require(paths.CONTROLLERS + '/HomeController');

app.get('/', HomeController.index);
app.get('/chat', HomeController.chat);
app.get('/about', HomeController.about);

module.exports = app;
