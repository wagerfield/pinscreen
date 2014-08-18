module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // Package Data
    pkg: grunt.file.readJSON('package.json'),

    // Stylus Tasks
    stylus: {
      compile: {
        src: 'assets/styles/styl/styles.styl',
        dest: 'assets/styles/css/styles.css'
      }
    },

    // CoffeeScript Tasks
    coffee: {
      options: {
        join: true
      },
      compile: {
        src: [
          'assets/scripts/coffee/**/*.coffee'
        ],
        dest: 'assets/scripts/js/project.js'
      }
    },

    // Concat Tasks
    concat: {
      libraries: {
        src: [
          'bower_components/threejs/build/three.js',
          'bower_components/dat-gui/build/dat.gui.js'
        ],
        dest: 'assets/scripts/js/libraries.js'
      },
      scripts: {
        src: [
          'assets/scripts/js/libraries.js',
          'assets/scripts/js/project.js'
        ],
        dest: 'assets/scripts/js/scripts.js'
      }
    },

    // Uglify Tasks
    uglify: {
      scripts: {
        src: '<%= concat.scripts.dest %>',
        dest: 'assets/scripts/js/scripts.min.js'
      }
    },

    // Watch Tasks
    watch: {
      stylus: {
        files: ['gruntfile.js', 'assets/styles/styl/**/*.styl'],
        tasks: ['stylus'],
        options: {
          spawn: false
        }
      },
      coffee: {
        files: ['gruntfile.js', 'assets/scripts/coffee/**/*.coffee'],
        tasks: ['coffee'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Register Tasks
  grunt.registerTask('build', ['stylus', 'coffee', 'concat']);
  grunt.registerTask('default', ['build', 'watch']);
};
