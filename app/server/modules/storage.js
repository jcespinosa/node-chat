var messages = [],
    users = {};

var getMessages = function(sClient) {
  messages.forEach(function(message) {
    sClient.emit('message', message);
  });
};

var getUsers = function(sClient) {
  for(var id in users) {
    sClient.emit('addUser', users[id]);
  }
};

var storeMessage = function(message) {
  messages.push(message);
  if(messages.length > 10) {
    messages.shift();
  }
};

var storeUser = function(user) {
  users[user.id] = user;
};

var removeUser = function(userId) {
  delete users[userId];
}

module.exports.getMessages = getMessages;
module.exports.getUsers = getUsers;
module.exports.storeMessage = storeMessage;
module.exports.storeUser = storeUser;
module.exports.removeUser = removeUser;
