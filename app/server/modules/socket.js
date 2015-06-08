var socketio = require('socket.io');

module.exports = function(server) {
  var io = socketio.listen(server);

  // socket.io events
  io.on('connection', function(client) {
    console.log('Client connected');

    client.emit('connection', 'Bienvenido');

    // On new member
    client.on('join', function(nickname) {
      client.nickname = nickname;
      client.broadcast.emit('join', nickname);
    });

    // On new message
    client.on('message', function(data) {
      var message = client.nickname + ': ' + data;
      console.log(message);
      client.broadcast.emit('message', message);
      client.emit('message', message);
    });
  });

  return io;
}
