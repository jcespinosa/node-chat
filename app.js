var app = require("./app/server/modules/routes");

var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Node events
server.on('request', function(request, response) {

});

server.on('close', function() {

});

// socket.io events
io.on('connection', function(client) {
  console.log('Client connected');

  client.emit('message', {
    message: 'Hello world!'
  });

  // On new message
  client.on('message', function(data) {
    console.log(data);
  });
});

server.listen(8000, function() {
  console.log('Listening on port %d', server.address().port);
});
