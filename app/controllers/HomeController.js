var PATHS = require('../config/paths');

var about = function(req, res) {
  res.sendFile('about.html', {root: PATHS.PUBLIC});
};

var chat = function(req, res) {
  res.render('index');
};

var index = function(req, res) {
  res.sendFile('index.html', {root: PATHS.PUBLIC});
};

module.exports.about = about;
module.exports.chat = chat;
module.exports.index = index;
