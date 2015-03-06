module.exports = function(grunt) {


    grunt.initConfig({
        concat: {
            tabs: {
                options: {
                    separator: ';\n'
                },
                files: {
                    'dist/tabs.js': ['src/components/tabs/tabs.js', 'src/components/tabs/**/*.js', '!src/components/tabs/**/*.spec.js']
                }
            }
        },
        compass: {
            tabs: {
                options: {
                    sassDir: 'src/components/tabs/',
                    cssDir: 'dist/'
                }
             }
        },
        cssmin: {
            tabs:{
                files:{
                    'dist/tabs.min.css':'dist/tabs.css'
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {

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
        uglify: {
            tabs: {
                files:{
                    'dist/tabs.min.js':'dist/tabs.js'
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['jshint','karma:tabs','concat:tabs','uglify:tabs','compass:tabs','cssmin:tabs']);

};