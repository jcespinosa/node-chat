/*
  ui.js

  node-chat ui script

  Juan Carlos Espinosa Ceniceros
  Project: node-chat
  jcespinosa/jceceniceros 2015
*/

var UI = (function() {
  var users = $('#chat-onlineUsers');
  var messages = $('#chat-messages');

  return {
    initToastr: function() {
      toastr.options = {
        closeButton: true,
        positionClass: 'toast-top-right',
        showDuration: '500',
        hideDuration: '10000',
        timeOut: '5000',
        extendedTimeOut: '1000',
        showEasing: 'swing',
        hideEasing: 'linear',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut'
      }
    },
    insertUser: function(userId, username) {
      users.append(
        $('<li>', {id: 'user'+userId, class: 'chat-user'}).append(
          $('<i>', {class: 'fa fa-user'})
        ).append(' '+username)
      );
    },
    insertMessage: function() {

    },
    removeUser: function() {

    },
    setConnectionStatus: function(id) {
      var username = prompt('What is your username?');
      username = (username) ? username : 'user' + id;
      $('#chat-username').text(username);
      $('#chat-connectionStatus').removeClass('text-danger')
                                 .addClass('text-success');
      return username;
    }
  };
})();
