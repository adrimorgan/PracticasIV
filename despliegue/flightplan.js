var plan = require('flightplan');

var username = 'vagrant';

// configuration
plan.target('production', [
  {
    host: 'billowing-brook-76.westus.cloudapp.azure.com',
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  }
]);

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
  remote.sudo('docker run adrianmorente/practicasiv');
});
