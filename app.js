var app = require('./app/server/modules/routes');
var server = require('http').createServer(app);
var io = require('./app/server/modules/socket')(server);

// Node events
server.on('request', function(request, response) {});
server.on('close', function() {});

// Server listen port
server.listen(8000, '127.0.0.1', function() {
  console.log('Listening on %j', server.address());
});
