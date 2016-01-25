module.exports = function(grunt) {
    // configuração dos plugins
    grunt.initConfig({
        concat: {
            dist: {
                src: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
                'assets/css/app.css'],
                dest: 'assets/css/main.css',
            }
        },
        uglify: {
            production: {
                files: {
                    'assets/js/main.js': [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'app/**/*.js']
                }
            },
            dev: {
                options: {
                    beautify: true
                },
                files: {
                    'assets/js/main.js': [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'app/**/*.js']
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'assets/css/main.css': [
                    'assets/css/main.css'
                    ]
                }
            }
        },
        watch: {
            scripts: {
                files: [
                '**/*.html', 
                '**/*.css', 
                '**/*.js'
                ],
                tasks: ['default']
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    debug: true,
                    livereload: true
                }
            }
        }
    });

    // carregamento dos plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // definição das tarefas
    grunt.registerTask('default', ['concat', 'uglify:dev', 'cssmin', 'connect:server', 'watch']);
    grunt.registerTask('build', ['concat', 'uglify:production', 'cssmin']);
};