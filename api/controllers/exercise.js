'use strict';

var mongoose = require('mongoose'),
  Exercise = mongoose.model('Exercises');

exports.list_all_exercises = function(req, res) {
  Exercise.find({}, function(err, exercise) {
    if(err)
      res.send(err);
    res.json(exercise);
  });
};

exports.create_an_exercise = function(req, res) {
  var new_exercise = new Exercise(req.body);
  new_exercise.save(function(err, exercise) {
    if(err)
      res.send(err);
    res.json(exercise);
  });
};

exports.read_an_exercise = function(req, res) {
  Exercise.findById(req.params.exerciseId, function(err, exercise) {
    if(err)
      res.send(err);
    res.json(exercise);
  });
};

exports.delete_an_exercise = function(req, res) {
  Exercise.remove({
    _id: req.params.exerciseId
  }, function(err, task) {
    if(err)
      res.send(err)
    res.json({ message: 'Exercise successfully deleted' });
  });
};
