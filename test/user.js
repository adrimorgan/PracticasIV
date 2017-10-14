var user = require('./../models/user.js');
var assert = require('assert');

var new_user = new user.User('Adrian','Morente','adrianmorente');
assert(new_user, "Usuario creado");
assert.equal(new_user.as_string(), "Adrian, Morente, adrianmorente", "Creado");
console.log("Assert da por hecho que algo está bien, así que solo habla cuando no lo está.");
