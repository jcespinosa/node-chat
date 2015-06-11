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
    initToastr: function() {
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
    },
    insertUser: function() {

    },
    insertMessage: function() {

    },
    removeUser: function() {
      
    }
    setConnectionStatus: function(nickname) {
      $('#username').text(nickname);
      $('#connection_status').removeClass('text-danger')
                             .addClass('text-success');
    }
  };
})();