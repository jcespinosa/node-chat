/*
  socket.js

  node-chat socket events script

  Juan Carlos Espinosa Ceniceros
  Project: node-chat
  jcespinosa/jceceniceros 2015

*/

$(document).ready(function() {
  var socket = io.connect('http://localhost:8000');

  socket.on('connection', function(data) {
    toastr.success(data);
    var nickname = prompt('What is your nickname? ');
    UI.setConnectionStatus(nickname);
    socket.emit('join', nickname);
  });

  socket.on('join', function(data) {
    toastr.info(data + ' joined the chat!');
    //UI.insertUser();
  });

  socket.on('message', function(data) {
    console.log(data);
    //UI.insertMessage();
  });
});
