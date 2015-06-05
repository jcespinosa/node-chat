/*
  app.js

  node-chat core script

  Juan Carlos Espinosa Ceniceros
  Project: node-chat
  jcespinosa/jceceniceros 2015

*/

$(document).ready(function() {
  var socket = io.connect('http://localhost:8000');

  socket.on('message', function(data) {
    alert(data.message);
  });

  $(document).on('click', 'button#send-message', function(e) {
    e.preventDefault();
    var message = $('#chat-message').val();
    if(message.length > 0) {
      console.log('Sending message: ' + message);
      socket.emit('message', message);
    } else {
      console.log('Empty message');
    }
  });
});
