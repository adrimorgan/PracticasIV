'use strict';

module.exports = function(grunt) {

  // Configuración del proyecto
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    docco: {
      debug: {
        src: ['*.js', './api/models/*.js', './api/controllers/*.js', './test/*.js'],
        options: {
      	  output: 'docs/'
        }
      }
    }
  });

  // Carga el plugin de grunt para hacer esto
  grunt.loadNpmTasks('grunt-docco');

  // Tarea por omisión: generar la documentación
  grunt.registerTask('default', ['docco']);

};
