/*
  ui.js

  node-chat ui script

  Juan Carlos Espinosa Ceniceros
  Project: node-chat
  jcespinosa/jceceniceros 2015
*/

var UI = (function() {
  var users = $('#chat-onlineUsers');

  var appendMessage = function(username, message, user) {
    var classes = (user) ? 'chat-message user' : 'chat-message';
    $('#chat-messages').append(
      $('<div>', {class: classes}).append(
        $('<p>', {class: 'username', html: username})
      ).append(
        $('<p>', {class: 'text', html: message})
      )
    );
  };

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
    insertMessage: function(message, userId) {
      if(message.userId === userId) {
        appendMessage('Yo:', message.message, true);
      } else {
        appendMessage(message.username + ':', message.message);
      }
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
