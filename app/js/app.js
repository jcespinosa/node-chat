/*
  app.js

  node-chat core script

  Juan Carlos Espinosa Ceniceros
  Project: node-chat
  jcespinosa/jceceniceros 2015

*/

$(document).ready(function() {

  $(document).on('click', 'button#send-message', function(e) {
    e.preventDefault();
    var message = $('#chat-message').val();
    if(message.length > 0) {
      console.log('Sending message: ' + message);
      socket.emit('message', message);
      //UI.insertMessage();
    } else {
      console.log('Empty message');
    }
  });

  try{
    if(toastr){
      UI.initToastr();
    }
  } catch(e) {
    console.log(e);
  }
});
