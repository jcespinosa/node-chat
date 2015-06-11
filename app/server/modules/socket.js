var socketio = require('socket.io');

module.exports = function(server) {
  var io = socketio.listen(server);
  var id = 0;

  // socket.io events
  io.on('connection', function(client) {
    id++;
    client.id = id;
    client.emit('connection', client.id);
    console.log('Client connected');

    // On new member
    client.on('join', function(username) {
      client.username = username;
      client.broadcast.emit('join', {id: client.id, name: username});
    });

    // On new message
    client.on('message', function(message) {
      var message = client.nickname + ': ' + data;
      console.log(message);
      client.broadcast.emit('message', message);
      client.emit('message', message);
    });
  });

  return io;
}
