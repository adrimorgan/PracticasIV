var request = require('supertest'),
  app = require('../app.js');

describe('Testing the correct deployment of the whole app', function(){

  // testing the 'jsonify' of an exercise created by parameters by PUT
  it('PUT /exercise/...parameters...', function(done){
    request(app)
      .put('/exercise/inertial/40/34/eccentric')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  // testing the DELETE method
  it('DELETE /exercises...', function(done){
    request(app)
      .delete('/exercises')
      .expect(200, done);
  });

});
