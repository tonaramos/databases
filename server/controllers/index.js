/*
server/controllers/index.js defines the messages and users controllers that your application will use. Skeletons of the controllers have already been created but you'll have to write out the details for their methods
*/

var models = require('../models');

var userFields = ['userName'];
var messageFields = ['userName', 'message', 'roomName'];
var roomNames = ['roomName', 'userName'];

module.exports = {
  messages: {
    get: function (req, res) {
      models.message.get(function(err, results ) {
        res.json(results);
      });
      //);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [ req.body[text], req.body[username], req.body[roomname] ];
      //console.log(req.method)
      res.json(results);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [ req.body[username] ];
      models.users.post(params, function(err, results) {
        res.json(results);
      });
    }
  }
};

