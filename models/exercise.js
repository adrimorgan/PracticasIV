// models/exercise.js
// the number and definition of the attributes is not final

// constructor
function Exercise(type, concentric_strength, eccentric_strength, initial_sense){
  this.type = type;
  this.concentric_strength = concentric_strength;
  this.eccentric_strength = eccentric_strength;
  this.initial_sense = initial_sense;
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
  }
};

// toString
Exercise.prototype.as_string = function exerciseToString(){
  return this.type + " " + this.concentric_strength + " " + this.eccentric_strength + " " + this.initial_sense;
};

module.exports = {
  Exercise
}
