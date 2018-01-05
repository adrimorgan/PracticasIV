var plan = require('flightplan');

var username = 'vagrant';

// configuration
plan.target('staging', [{
  host: 'billowing-brook-76.westus.cloudapp.azure.com',
  username: username,
  agent: process.env.SSH_AUTH_SOCK
}]);

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
  remote.log('Ejecutando microservicio...');
  remote.with('cd ~/PracticasIV', function(){
    remote.exec('npm install');
    remote.sudo('pm2 start app.js')
  });
});
