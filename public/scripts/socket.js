/*
  socket.js

  node-chat socket events script

  Juan Carlos Espinosa Ceniceros
  Project: node-chat
  jcespinosa/jceceniceros 2015
*/

var SOCKET = function() {
  var socket = io.connect('http://localhost:8000');

  var user = {
    id: 0,
    name: ''
  };

  // On new connection
  socket.on('connection', function(id) {
    user.id = id;
    user.name = UI.setConnectionStatus(id);
    socket.emit('join', user);
    toastr.success('Welcome ' + user.name + '!');
  });

  // On new member
  socket.on('join', function(user) {
    UI.insertUser(user.id, user.name);
    toastr.info(user.name + ' joined!');
  });

  // Add other connected users
  socket.on('addUser', function(user) {
    UI.insertUser(user.id, user.name);
  });

  // Remove disconnected user
  socket.on('removeUser', function(user) {
    UI.removeUser(user.id);
    toastr.info(user.name + ' left the chat');
  });

  // On new message
  socket.on('message', function(message) {
    UI.insertMessage(message, user.id);
  });

  return socket;
};
