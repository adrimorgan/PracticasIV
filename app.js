#!/usr/bin/node
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));

// model of my data
var exercise = require('./api/models/exercise');
var exercises = new Array;

// just a visit counter
var visit_counter = 0;

// index route
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  visit_counter += 1;
});

// status route, just trying that the service is running well
app.get('/status', function(req, res){
  res.send('{ "status" : "OK" }');
  visit_counter += 1;
});

// example of route
app.get('/exercise', function(req, res){
  visit_counter += 1;
  res.send("Welcome to Dynasystem - exercises! :D\n" +
    "You\'re the number #" + visit_counter + " visitor!" +
    "Maybe you would like to add a exercise\' name to the URL...");
});

// list all exercises
app.get('/exercises', function(req, res){
  res.send(exercises);
});

// delete an exercise
app.delete('/exercises', function(req, res){
  exercises = [];
  res.sendStatus(200);
});

// example of route to exercise identified by name
app.get('/exercise/:exerciseName', function(req, res){
  res.send("Welcome to Dynasystem - exercises! :D\n" +
    "You're the number #" + visit_counter + " visitor!" +
    "\nAnd this is the exercise named: " + req.params.exerciseName);
});

// HTTP request to create an exercise
app.put('/exercise/:type/:concentric_strength/:eccentric_strength/:initial_sense', function(req, res){
  var new_exercise = new exercise.Exercise(req.params.type,
    req.params.concentric_strength,
    req.params.eccentric_strength,
    req.params.initial_sense);
  exercises.push(new_exercise);
  res.send(new_exercise);
});

if(!module.parent){
  app.listen(port);
  console.log('Server running at http://127.0.0.1:' + port + '/');
}

module.exports = app;
