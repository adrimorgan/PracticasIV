// test/exercise.js
var exercise = require('./../api/models/exercise.js');
var assert = require('assert');

describe('Testing the Exercise prototype', function() {

  // JSON with the parameteres used to test the creation of an exercise
  test_params = {
    'type': 'Inertial',
    'concentric_strength': '50',
    'eccentric_strength': '30',
    'initial_sense': 'Concentric',
    'repetitions' : '1',
    'series' : '1'
  };

  // testing the load of the library
  describe('Load an exercise', function() {
    it('should be loaded', function() {
      assert(exercise, 'Loaded');
    });
  });

  // testing the creation of an exercise
  describe('Create an exercise', function() {
    it('should create exercise correctly', function() {
      var new_exercise = new exercise.Exercise(test_params);
      assert.equal(new_exercise.as_string(), "Inertial 50 30 Concentric 1 1", "Created");
    });
  });

  // testing the update of an exercise
  describe('Update an exercise', function() {
    it('should update exercise correctly', function() {
      var new_exercise = new exercise.Exercise(test_params);
      new_exercise.setInitialSense = 'Eccentric';
      assert.equal(new_exercise.as_string(), "Inertial 50 30 Eccentric 1 1", "Updated");
    });
  });

});
