module.exports = function(grunt) {
    // measures the time each task takes
    require('time-grunt')(grunt);
    // load grunt config
    require('load-grunt-config')(grunt);
    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint']);
};