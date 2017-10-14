var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//user schema definition
var UserSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    gh-user: { type: String, required: true },
    repositories: { type: String[], required: true }
  }
);

module.exports = mongoose.model('user', UserSchema);
