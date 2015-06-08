/*
  app.js

  node-chat core script

  Juan Carlos Espinosa Ceniceros
  Project: node-chat
  jcespinosa/jceceniceros 2015

*/

function initToastr(){
  toastr.options = {
    "closeButton": true,
    "positionClass": "toast-top-right",
    "showDuration": "500",
    "hideDuration": "10000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
}

$(document).ready(function() {
  var socket = io.connect('http://localhost:8000');

  socket.on('connection', function(data) {
    toastr.success(data.message);
  });

  socket.on('message', function(data) {
    console.log(data.message);
    //insertMessage();
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

  try{
    if(toastr){
      initToastr();
    }
  } catch(e) {
    console.log(e);
  }
});
