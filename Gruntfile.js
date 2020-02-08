module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      dist: {
        files: {
          src: [ 'server.js', 'cluster.js', 'routes/**/*.js', 'data/**/*.js', 'data/**/*.json' ]
        }
      }
    },

    bower: {
      install: {
        options: {
          copy: false
        }
      }
    },

    express: {
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },

    watch: {
      options: {
        spawn: false
      },
      js: {
        files: [ 'server.js', 'data/**/*.js', 'routes/**/*.js', 'data/**/*.json' ],
        tasks: [ 'express:dev' ]
      }
    }
  });

  grunt.registerTask('build', [ 'jshint', 'bower:install' ]);
  grunt.registerTask('dev', [ 'build', 'express:dev', 'watch' ]);

  grunt.registerTask('default', ['dev']);
}
