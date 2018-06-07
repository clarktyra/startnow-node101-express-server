// import files and packages up here
var express = require('express');
var morgan = require('morgan');
var json = require('./data.json');

// create your express server below
var app = express();
// add your routes and middleware below
//Server should respond to GET requests 
//to / route the top spots page
app.get('/', function (req, res){
res.status(200).send('it is working')
})

//Server should respond with a status code of 200

//Server should log each request using morgan's dev format
app.use(morgan('dev'));
//Server should indicate when it is listening and on which port


//Server should respond to GET requests 
//to /data route with the top spots data
app.get('/data', function (req, res){
    res.send(json)
})
// finally export the express application
module.exports = app;
