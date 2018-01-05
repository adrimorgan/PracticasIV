var plan = require('flightplan');

var username = 'vagrant';

// configuration
plan.target('staging', [{
  host: 'bold-grass-66.westus.cloudapp.azure.com',
  username: username,
  agent: process.env.SSH_AUTH_SOCK
}]);

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
  remote.log('Ejecutando microservicio...');
  remote.with('cd ~/PracticasIV', function(){
    remote.exec('npm install');
    remote.exec('sudo pm2 start app.js')
  });
});
