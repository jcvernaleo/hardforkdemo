module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [{
                        expand: true,
                        cwd: 'src/',
                        src: ['*'],
                        dest: '../public/',
                        filter: 'isFile'
                    },
                    {   
                        expand: true,
                        cwd: 'bower_components/chart.js/dist',
                        src: ['Chart.min.js'],
                        dest: '../public/js',
                        filter: 'isFile'
                    },
                    {   
                        expand: true,
                        cwd: 'src/css',
                        src: ['dynamic.less'],
                        dest: '../public/css',
                        filter: 'isFile'
                    },
                    {   
                        expand: true,
                        cwd: 'src/images',
                        src: ['**/*'],
                        dest: '../public/images',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'src/fonts',
                        src: ['inconsolata-v15-latin-regular.eot', 'inconsolata-v15-latin-regular.svg', 'inconsolata-v15-latin-regular.woff', 'inconsolata-v15-latin-regular.woff2', 'source-sans-pro-v9-latin-regular.eot', 'source-sans-pro-v9-latin-regular.svg', 'source-sans-pro-v9-latin-regular.woff', 'source-sans-pro-v9-latin-regular.woff2'],
                        dest: '../public/fonts',
                        filter: 'isFile'
                    },
                ]

            }
        },

        concat: {
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
		    'bower_components/less.js/dist/less.min.js',
                    'src/js/main.js'
                ],
                dest: '../public/js/complete.js'
            }
        },

        uglify: {
            my_target: {
                files: {
                    '../public/js/complete.js': ['../public/js/complete.js']
                }
            }
        },
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded',
                    'sourcemap': 'none',
                    'style': 'compressed'

                },
                files: { // Dictionary of files
                    '../public/css/main.css': 'src/css/main.scss',
                }

            }
        },
        watch: {

            css: {
                files: ['src/css/main.scss'],
                tasks: ['sass'],
            },

            html: {
                files: ['src/*'],
                tasks: ['copy'],
            },

            img: {
                files: ['src/images/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    livereload: true
                }
            },
        }
    });



    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['copy', 'concat', 'uglify', 'sass', ]);
};