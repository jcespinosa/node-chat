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

var getUsers = function(sClient) {
  client.hvals('users', function(error, users) {
    users = users.reverse();
    users.forEach(function(user) {
      user = JSON.parse(users[id]);
      sClient.emit('addUser', user);
    });
  });
};

var storeMessage = function(message) {
  message = JSON.stringify(message);

  client.lpush('messages', message, function(error, response) {
    client.ltrim('messages', 0, 9);
    console.log(message);
  });
};

var storeUser = function(user) {
  var userId = user.id;
  user = JSON.stringify(user);

  client.hset('users', userId, user, function(error, response) {
    console.log(user);
  });
};

var removeUser = function(userId) {
  client.hdel('users', userId, function(error, response) {
    console.log(response);
  });
}

module.exports.getMessages = getMessages;
module.exports.getUsers = getUsers;
module.exports.storeMessage = storeMessage;
module.exports.storeUser = storeUser;
module.exports.removeUser = removeUser;
