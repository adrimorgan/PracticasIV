// models/exercise.js

// constructor
params = {
  'type' : 'Inertial',
  'concentric_strength' : '57',
  'eccentric_strength' : '845',
  'initial_sense' : 'Concentric',
  'repetitions' : '1',
  'series' : '1'
};

function Exercise(params){
  this.type = params.type;
  this.concentric_strength = params.concentric_strength;
  this.eccentric_strength = params.eccentric_strength;
  this.initial_sense = params.initial_sense;
  this.repetitions = params.repetitions;
  this.series = params.series;
};

// setters
Exercise.prototype = {
  set setType(type) {
    this.type = type;
  },

  set setConcentricStrength(value) {
    this.concentric_strength = value;
  },

  set setEccentricStrength(value) {
    this.eccentric_strength = value;
  },

  set setInitialSense(value) {
    this.initial_sense = value;
  },

  set setRepetitions(value) {
    this.repetitions = value;
  },

  set setSeries(value) {
    this.series = value;
  }
};

// toString
Exercise.prototype.as_string = function exerciseToString(){
  return this.type + " " + this.concentric_strength + " " + this.eccentric_strength + " " + this.initial_sense + " "
  + this.repetitions + " " + this.series;
};

module.exports = {
  Exercise
};
