var socketio = require('socket.io');
var storage = require('./storage');

module.exports = function(server) {
  var id = 0,
      io = socketio.listen(server);

  // socket.io events
  io.sockets.on('connection', function(client) {
    id++;
    client.ID = id;
    client.emit('connection', client.ID);
    console.log('Client connected');

    // On new member
    client.on('join', function(user) {
      client.name = user.name;
      client.broadcast.emit('join', user);
      storage.getUsers(client);
      storage.getMessages(client);
      storage.storeUser(user);
    });

    // On new message
    client.on('message', function(message) {
      var message = {
        userId: client.ID,
        username: client.name,
        message: message
      };
      client.broadcast.emit('message', message);
      client.emit('message', message);
      storage.storeMessage(message);
    });

    // On disconnect user
    client.on('disconnect', function() {
      var user = {
        id: client.ID,
        name: client.name
      };
      client.broadcast.emit('removeUser', user);
      storage.removeUser(client.ID);
      console.log('Client disconnected');
    });
  });

  return io;
}
