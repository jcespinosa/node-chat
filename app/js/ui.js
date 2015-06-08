/*
  ui.js

  node-chat ui script

  Juan Carlos Espinosa Ceniceros
  Project: node-chat
  jcespinosa/jceceniceros 2015

*/

var UI = (function() {
  var users = $();
  var messages = $();

  return {
    insertUser: function() {

    },
    insertMessage: function() {

    },
    setConnectionStatus: function(nickname) {
      $('#username').text(nickname);
      $('#connection_status').removeClass('text-danger')
                             .addClass('text-success');
    }
  };
})();