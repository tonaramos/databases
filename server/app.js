
/*
 will be the entrypoint for your Node.js web server code and utilizes express, the ubiquitous JavaScript web application framework. Express is an MVC framework. In Express, the view is considered to be the Express server's response. Code for the models and code for the controllers exist within their own directory, mentioned below. For more information on how Express utilizes MVC, check out the the Getting started section of the Express docs, but remember you're under extreme time pressure for this sprint, and, you'll be getting more Express content in upcoming sprints
*/

var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

