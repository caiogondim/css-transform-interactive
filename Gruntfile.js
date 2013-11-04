/* global module */

module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

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
    watch: {
      sass: {
        files: ['styles/*.scss'],
        tasks: ['sass']
      }
    }
  });

};
