// test/exercise.js
var exercise = require('./../api/models/exercise.js');
var assert = require('assert');

describe('Testing the Exercise prototype', function(){

  // testing the load of the library
  describe('Load an exercise', function(){
    it('should be loaded', function(){
      assert(exercise, 'Loaded');
    });
  });

  // testing the creation of an exercise
  describe('Create an exercise', function(){
    it('should create exercise correctly', function(){
      var new_exercise = new exercise.Exercise('Inertial',50,30,'Concentric');
      assert.equal(new_exercise.as_string(), "Inertial 50 30 Concentric", "Created");
    });
  });

  // testing the update of an exercise
  describe('Update an exercise', function(){
    it('should update exercise correctly', function(){
      var new_exercise = new exercise.Exercise('Inertial',50,30,'Concentric');
      new_exercise.setInitialSense = "Eccentric";
      assert.equal(new_exercise.as_string(), "Inertial 50 30 Eccentric", "Updated");
    });
  });

});
