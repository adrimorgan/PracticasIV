#!/usr/bin/node

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res){
  res.send("Welcome to Dynasystem - exercises! :D");
});

app.get('/exercise/<exercise>', function(req, res){
  res.send("Welcome to Dynasystem - exercises! Would you choose an exercise?")
});

// app.put('/exercise', function(req, res){
//
// });

app.listen(port);
console.log('Server running at http://127.0.0.1:'+port+'/');
