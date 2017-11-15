var request = require('supertest'),
  app = require('../app.js');

describe('Testing the correct deployment of the whole app', function(){

  // getting main content (index page)
  it('GET /', function(done){
    request(app)
      .get('/')
      .expect('Content-Type', "text/html; charset=UTF-8")
      .expect(200, done);
  })

  // testing the correct status of the API
  it('GET /status', function(done){
    request(app)
      .get('/status')
      .expect('Content-Type', "text/html; charset=utf-8")
      .expect('{ "status" : "OK" }')
      .expect(200, done);
  });

  // testing the 'jsonify' of an exercise created by parameters by PUT
  it('PUT /exercise/...parameters...', function(done){
    request(app)
      .put('/exercise/inertial/40/34/eccentric')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  // testing the 'jsonify' of all exercises in the app's array by GET
  it('GET /exercises', function(done){
    request(app)
      .get('/exercises')
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
