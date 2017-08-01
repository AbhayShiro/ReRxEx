'use strict';
/*
Grunt is a task-based command line build tool for JavaScript projects which makes performing repetitive, but necessary tasks, trivial.

Grunt can be used to validate HTML CSS and JS
It also is used to Minify CSS/JS
It can also be used to compile TS/CoffeeScript

How's GRUNT structured:
1. Every GRUNT project requires package.json
2. Gruntfile.js which contains the configuration.

To run the grunt script once above two is set up, open a command line:
1. Go to directory that contains the Gruntfile.js
2. Execute: grunt taskName -v

How to set up grunt:
1. Install Node JS
2. Install GRUNT cli
3. Install GRUNT locally
4. Create a package.json
5. Create a gruntfile.js

 */

/*************************************
 * Gruntfile.js
 * configuration file for grunt task runner
 * 1. eslint:   validates specified set of files in required code standards
 * 2. webpack:  compiles app folder to single bundle. converts es6 to es5 using babel transpiler
 * 3. nodemon:  watch all files and restart server automatically 
 * *************************************/

module.exports = function (grunt) {

  require('dotenv').config();
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks("gruntify-eslint");

  // load webpack configuration     
  var webpackConfig = require('./webpack.config.js');  

  const build_path = 'build/';
    
  // grunt configuration.
  grunt.initConfig({
    eslint: {
      options: {
        silent: true
      },
      src: ['app/**/*.js', 'server/**/*.js', 'Gruntfile.js', 'webpack.config.js', '!app/bundle.js', '!app/bundle.js.map']
    },
    webpack: {
      options: webpackConfig,
      build: {
        plugins: webpackConfig.plugins
      }
    },
    watch: {
      app: {
        files: ['app/**/*', 'webpack.config.js', 'Gruntfile.js'],
        tasks: ['webpack:build'],
        options: {
          spawn: false,
        }
      }
    },
    nodemon: {
      dev: {
        script: 'server/main.babel.js'
      }
    },
    shell: { 
      options: {
        stdout: true,
        stderr: true
      },
      prod_build: {
          command: [
                'babel api --out-dir ' + build_path + 'api',
                'babel app --out-dir ' + build_path + 'app',
                'babel server --out-dir ' + build_path + 'server'
            ].join('&&')  
      }
    },
    clean: {
      all: build_path + '*',         // clean all files within build folder 
      readme: build_path+ '**/*.md'    // remove all files having .md ext   
    },
    copy: {
          main: {
            files: [
                { expand: true, src: ['.ebextensions/**'], dest: build_path },
                { expand: true, src: ['bin/**'], dest: build_path },
                { expand: true, src: ['app/views/**'], dest: build_path },
                { expand: true, src: ['public/**'], dest: build_path },
                { expand: true, src: ['aws/**'], dest: build_path },
                { expand: true, src: ['data/**'], dest: build_path },                
                { src: ['package.json'], dest: build_path },
                { src: ['ecosystem.config.js'], dest: build_path },
            ]
        }
    }
  });

  grunt.registerTask('schema', ['shell:generate_schema']);
  grunt.registerTask('compile', ['eslint']);
  grunt.registerTask('default', ['webpack:build', 'nodemon', 'watch:app']);

  grunt.registerTask('prod', ['clean:all',
      'webpack:build',
      'shell:prod_build',
      'copy',
      'clean:readme',
  ]);
};
