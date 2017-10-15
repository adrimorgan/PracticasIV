// test/user.js
var user = require('./../models/user.js');
var assert = require('assert');

describe('User', function(){
  // testing the load of the library
  describe('Load', function(){
    it('should be loaded', function(){
      assert(user, 'Loaded');
    });
  });

  // testing the creation of an user
  describe('Create', function(){
    it('should create user correctly', function(){
      var new_user = new user.User('Adrián','Morente','adrianmorente');
      assert.equal(new_user.as_string(), "Adrián Morente: adrianmorente", "Creado");
    });
  });

  // testing the update of an user
  describe('Update', function(){
    it('should update user correctly', function(){
      var new_user = new user.User('Adrián','Morente','adrianmorente');
      new_user.setLastName = "Morente Gabaldón";
      assert.equal(new_user.as_string(), "Adrián Morente Gabaldón: adrianmorente", "Actualizado");
    });
  });

});
