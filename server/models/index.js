
/*
server/models/index.js defines the messages and users models that your application will use. Skeletons of the models have already been created but you'll have to write out the details for their methods
*/

var db = require('../db');

module.exports = {
  messages: {
    test: function() {
      console.log('this command worked.........');
    },
    get: function (callback) {
      let sqlQuery = 'SELECT * FROM messages;'; //TODO refactor this query for a specific test;
      db.con.query( sqlQuery, function(err, result, fields) {
        if (err) { throw err; }        
        callback(result);
      });
    }, 
    post: function (params, callback) {
      //console.log("Connected! on messages POST FUNCTION");
      let sql = 'INSERT INTO messages (message) VALUES (\'this is my first message\');';//TODO refactor
      db.con.query(sql, function (err, result) {
        if (err) { throw err; }
        //console.log("MESSAGES POST ----------------->", result);
      });
    }  
  },
  users: {
    get: function (callback) {
      console.log('ENTERED GET');
      db.con.query('SELECT * FROM users;', function(err, result, fields) {
        if (err) { throw err; }        
        console.log('USERS GET--------RESULTS-------> ', result);
      });


      //function 1
      //promise (function => retrun (value)).then function 2
      


    }, 
    post: function (name, callback) {
       
      let sql = `INSERT INTO users (userName) VALUES ('${name}')`;
      db.con.query(sql, function (err, result) {
        if (err) { throw err; }
        callback(result);
      });
    } 
  }
};
//console.log(" module.exports.users.get();" ,  module.exports.users.get());
//module.exports.users.post('Andrew', (stuff)=>console.log(stuff));
// WRITE TO A FILE https://dev.mysql.com/doc/refman/8.0/en/select-into.html