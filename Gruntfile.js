module.exports = function(grunt) {


    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        karma: {
            tabs:{
                options: {
                    files: [
                        'bower_components/angular/angular.js',
                        'bower_components/angular-mocks/angular-mocks.js',
                        'src/components/tabs/tabs.js',
                        'src/components/tabs/**/*.js'
                    ],
                    basePath: '',
                    frameworks: ['jasmine'],
                    exclude: [],
                    preprocessors: {},
                    reporters: ['progress'],
                    port: 9876,
                    colors: true,
                    logLevel: 'ERROR',
                    autoWatch: false,
                    browsers: ['PhantomJS'],
                    singleRun: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['jshint','karma:tabs']);

};