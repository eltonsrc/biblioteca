module.exports = function(grunt) {
    // configuração dos plugins
    grunt.initConfig({
        concat: {
            dist: {
                src: [ 'js/src/functions.js', 'js/src/core.js' ],
                dest: 'js/dist/projeto.js',
            }
        },
        uglify: {
            dist: {
                files: {
                    'js/dist/projeto.js': [
                    'js/src/functions.js', 
                    'js/src/core.js']
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'css/dist/projeto.css': [
                        'css/src/components.css',
                        'css/src/core.css'
                    ]
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    'js/src/functions.js',
                    'js/src/core.js'
                ],
                tasks: ['default']
            }
        }
    });

    // carregamento dos plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // definição das tarefas
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};