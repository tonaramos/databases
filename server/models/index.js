
/*
server/models/index.js defines the messages and users models that your application will use. Skeletons of the models have already been created but you'll have to write out the details for their methods
*/

var db = require('../db');

module.exports = {
  messages: {
    get: function () {

    }, // a function which produces all the messages
    post: function () {
      
    } // a function which can be used to insert a message into the database
  },
// SELECT columns (a,b,c ) VALUES ()
  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};



// WRITE TO A FILE https://dev.mysql.com/doc/refman/8.0/en/select-into.html