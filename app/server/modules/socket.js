var socketio = require('socket.io');

module.exports = function(server) {
  var id = 0,
      io = socketio.listen(server),
      messages = [],
      users = {};

  function storeMessage(message) {
    messages.push(message);
    if(messages.length > 10) {
      messages.shift();
    }
  }

  function storeUser(user) {
    users[user.id] = user;
  }

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
      for(var id in users) {
        client.emit('addUser', users[id]);
      }
      messages.forEach(function(message) {
        client.emit('message', message);
      });
      storeUser(user);
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
      storeMessage(message);
    });
  });

  return io;
}
