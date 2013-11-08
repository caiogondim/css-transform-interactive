/* global module */

module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    sass: {
      default: {
        options: {
          style: 'compressed'
        },
        files: {
          'styles/main.css': 'styles/main.scss'
        }
      }
    },
    jshint: {
      files: ['./script/*.js'],
      options: grunt.file.readJSON('.jshintrc')
    },
    watch: {
      sass: {
        files: ['style/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('test', ['jshint']);

};
