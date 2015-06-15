var redis = require('redis');
var client = redis.createClient();

var getMessages = function(sClient) {
  client.lrange('messages', 0, -1, function(error, messages) {
    messages = messages.reverse();
    messages.forEach(function(message) {
      message = JSON.parse(message);
      sClient.emit('addMessage', message);
    });
  });
};

var getUser = function() {

};

var storeMessage = function(message) {
  message = JSON.stringify(message);

  client.lpush('messages', message, function(error, response) {
    client.trim('message', 0, 9);
  });
};

var storeUser = function(client) {

};

module.exports.getMessage = getMessage;
module.exports.getUser = getUser;
module.exports.storeMessage = storeMessage;
module.exports.storeUser = storeUser;
