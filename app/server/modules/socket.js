var socketio = require('socket.io');

module.exports = function(server) {
  var io = socketio.listen(server);

  // socket.io events
  io.on('connection', function(client) {
    console.log('Client connected');

    client.emit('connection', {
      message: 'Bienvenido'
    });

    // On new message
    client.on('message', function(data) {
      console.log(data);
    });
  });

  return io;
}
