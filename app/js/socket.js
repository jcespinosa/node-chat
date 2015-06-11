/*
  socket.js

  node-chat socket events script

  Juan Carlos Espinosa Ceniceros
  Project: node-chat
  jcespinosa/jceceniceros 2015
*/

$(document).ready(function() {
  // Init socket
  var socket = io.connect('http://localhost:8000');

  // On new connection
  socket.on('connection', function(id) {
    var username = UI.setConnectionStatus(id);
    socket.emit('join', username);
    console.log('User: ' + id);
  });

  // On new member
  socket.on('join', function(user) {
    console.log(user);
    UI.insertUser(user.id, user.name);
    toastr.info(user.name+ ' joined the chat!');
  });

  // On new message
  socket.on('message', function(data) {
    //UI.insertMessage();
    console.log(data);
  });
});
