// models/user.js

// constructor
function User(firstname, lastname, gh_user){
  this.firstname = firstname;
  this.lastname = lastname;
  this.gh_user = gh_user;
};

// setters
User.prototype = {
  set setFirstName(name) {
    this.firstname = name;
  },

  set setLastName(name) {
    this.lastname = name;
  },

  set setGH_User(user) {
    this.gh_user = user;
  }
};

// toString
User.prototype.as_string = function userToString(){
  return this.firstname + " " + this.lastname + ": " + this.gh_user;
};

module.exports = {
  User
}
