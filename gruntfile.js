module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-env');

    grunt.registerTask('build',  [
            'clean:destination',
            'copy:php',
            'copy:img',
            'copy:fonts',
            'copy:docs',
            'recess:css',
            'concat:css',
            'concat:js',
            'uglify',
            'env:prod',
            'preprocess:prod'
            /*'copy:site'*/

        ]);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Variables
        destination: 'dist',
        source: 'site', 
        resources: {
            js: ['<%= source %>/resources/js'],
            css: ['<%= source %>/resources/css'],
            img: '<%= source %>/resources/img',
            php: '<%= source %>/resources/php',
            docs: '<%= source %>/docs'
        },
        libs: {
            css: [
                '<%= source %>/vendors/fontawesome/css/font-awesome.min.css',
                '<%= source %>/vendors/timeliner/css/timeliner.css',
                '<%= source %>/vendors/honeycombs/homeycombs/css/homeycombs.css'
            ],
            js: [
                '<%= source %>/vendors/jquery/dist/jquery.min.js',
                '<%= source %>/vendors/flowtype/flowtype.js',
                '<%= source %>/vendors/jquery.stellar/jquery.stellar.min.js',
                '<%= source %>/vendors/waypoints/lib/jquery.waypoints.min.js',
                '<%= source %>/vendors/honeycombs/homeycombs/js/jquery.homeycombs.js',
                '<%= source %>/vendors/timeliner/js/vendor/venobox/venobox.min.js',
                '<%= source %>/vendors/timeliner/js/timeliner.min.js'
            ],
            fonts: '<%= source %>/vendors/fontawesome/fonts'
        },
        output: {
            js:  '<%= destination %>/resources/js',
            css: ['<%= destination %>/resources/css'],
            img: '<%= destination %>/resources/img',
            php: '<%= destination %>/resources/php',
            fonts: '<%= destination %>/resources/fonts',
            docs: '<%= destination %>/docs'
        },

        // Plugins
        clean: {
            destination: ['<%= destination %>']
        },

        copy: {
            site: {
                files: [
                    {
                        expand: true, 
                        cwd: '<%= source %>', 
                        dot: false,  
                        src: './**/*', 
                        dest: '<%= destination %>'
                    }
                ]
            },
            img: {
                files: [
                    {
                        expand: true, 
                        cwd: '<%= resources.img %>', 
                        dot: false,  
                        src: './**/*', 
                        dest: '<%= output.img %>'
                    }
                ]
            },
            docs: {
                files: [
                    {
                        expand: true, 
                        cwd: '<%= resources.docs %>', 
                        dot: false,  
                        src: './**/*', 
                        dest: '<%= output.docs %>'
                    }
                ]
            },
            php: {
                files: [
                    {
                        expand: true, 
                        cwd: '<%= resources.php %>', 
                        dot: true,  
                        src: './**/*', 
                        dest: '<%= output.php %>'
                    }
                ]
            },
            fonts: {
                files: [
                    {
                        expand: true, 
                        cwd: '<%= libs.fonts %>', 
                        dot: false,  
                        src: './**/*', 
                        dest: '<%= output.fonts %>'
                    }
                ]
            }
        },

        recess: {
            css: {
                files: {
                    '<%= output.css %>/<%= pkg.name %>.css': ['<%= resources.css %>/**/*.css']
                },
                options: {
                    compress: true
                }
            }
        },

        concat: {
            css: {
                files: {
                    '<%= output.css %>/libs.css': ['<%= libs.css %>']
                }
            },
            js: {
                files: {
                    '<%= output.js %>/libs.js': ['<%= libs.js %>']
                }
            }

        },
        uglify: {
            options: {
                banner: '/*! Minified: <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
               // compress: true,
                preserveComments: false
            },
            js: {
                src: '<%= resources.js %>/**/*.js',
                dest: '<%= output.js %>/<%= pkg.name %>.min.js'
            }
        },
        env : {
            options : {},
            prod : { NODE_ENV : 'PROD' }
        },
        preprocess : {
            prod : {
                src : '<%= source %>/index.html',
                dest : '<%= destination %>/index.html',
                options : {
                    context : {
                        name : '<%= pkg.name %>'
                    }
                }
            }
        },

    });
};