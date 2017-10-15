// test/user.js
var user = require('./../models/user.js');
var assert = require('assert');

// testing the creation of an user
var new_user = new user.User('Adrián','Morente','adrianmorente');
assert(new_user, "Usuario creado");
console.log(new_user.as_string());
assert.equal(new_user.as_string(), "Adrián Morente: adrianmorente", "Creado");
console.log("Creación de usuario completa.\n");

// testing the update of an user
new_user.setLastName = "Morente Gabaldón";
console.log(new_user.as_string());
assert.equal(new_user.as_string(), "Adrián Morente Gabaldón: adrianmorente", "Actualizado");
console.log("Actualización de usuario completa.\n");
