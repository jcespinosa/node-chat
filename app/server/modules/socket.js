var socketio = require('socket.io');

module.exports = function(server) {
  var io = socketio.listen(server),
      id = 0,
      users = {},
      messages = [];

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
      storeUser(user);
    });

    // On new message
    client.on('message', function(message) {
      var message = {
        username: client.name,
        message: message
      };
      client.broadcast.emit('message', message);
      storeMessage(message);
    });
  });

  return io;
}
