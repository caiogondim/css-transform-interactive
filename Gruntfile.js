/* global module */

module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-csslint')
  grunt.loadNpmTasks('grunt-concurrent')

  grunt.initConfig({
    sass: {
      default: {
        options: {
          style: 'nested'
        },
        files: {
          'style/main.css': 'style/main.scss'
        }
      }
    },
    jshint: {
      files: ['./script/*.js'],
      options: grunt.file.readJSON('.jshintrc')
    },
    csslint: {
      options: grunt.file.readJSON('.csslintrc'),
      default: {
        src: ['./style/*.css']
      }
    },
    connect: {
      default: {
        options: {
          port: 3000,
          keepalive: true
        }
      }
    },
    watch: {
      sass: {
        files: ['style/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    },
    concurrent: {
      default: ['watch:sass', 'connect'],
      options: {
        logConcurrentOutput: true
      }
    }
  })

  grunt.registerTask('test', ['jshint', 'csslint'])
  grunt.registerTask('run', ['concurrent:default'])
}
