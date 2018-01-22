#!/usr/bin/node
var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

// puerto sobre el que alojamos la API
var port = process.env.PORT || 80;
app.use(express.static(__dirname + '/public'));

// inicializamos las variables necesarias para JSON Web Tokens siguiendo el
//    tutorial de 'Quick start' provisto por auth0.com
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://adrianmorente.eu.auth0.com/.well-known/jwks.json"
  }),
  audience: 'dynasystem-users',
  issuer: "https://adrianmorente.eu.auth0.com/",
  algorithms: ['RS256']
});

app.use(jwtCheck);

// modelo de datos de los ejercicios guardados
var exercise = require('./api/models/exercise');
var exercises = new Array;

// ruta índice por defecto
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// status route. Para testear el funcionamiento de la API y su estado 'running'
app.get('/status', function(req, res){
  res.send('{ "status" : "OK" }');
});

app.get('/exercise', function(req, res){
  // res.sendFile(__dirname + '/exercise.html');
  res.send("Welcome to Dynasystem - exercises! :D\n" +
    "Maybe you would like to add a exercise\' name to the URL...");
});

app.get('/exercises', function(req, res){
  res.send(exercises);
});

app.delete('/exercises', function(req, res){
  exercises = [];
  res.sendStatus(200);
});

app.get('/exercise/:exerciseName', function(req, res){
  res.send("Welcome to Dynasystem - exercises! :D\n" +
    "\nAnd this is the exercise named: " + req.params.exerciseName);
});

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
  console.log('Server running at:' + port + '/');
}

module.exports = app;
