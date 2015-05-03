var fs = require('fs');

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: ['src/**/*', 'less/*'],
                tasks: ['dev']
            }
        },
        copy: {
            prod: {
                files: [{
                    expand: true,
                    src: ['src/**/*.html', 'src/**/*.css', 'icons/**', 'js/**', 'manifest.json', '_locales/**', 'images/*'],
                    dest: 'prod/',
                    filter: 'isFile'
                }]
            }
        },
        clean: {
            prod: {
                src: ["prod/dist/src/**/*.js"]
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'micron.zip'
                },
                files: [
                    {expand: true, cwd: '.', src: ['prod/**'], dest: '.'}, // makes all src relative to cwd
                ]
            }
        },
        less: {
            dev: {
                files: {
                    "src/inject/inject.css": "less/build.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).

    grunt.registerTask('prod', ['copy:prod', 'clean:prod', 'compress:main']);
    grunt.registerTask('dev', ['less:dev']);
};
