module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('build',  [
			'clean:dist',
			'copy:site'
		]);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
            dist: ['dist']
        },
        copy: {
            site: {
                files: [
                    {expand: true, cwd: 'site', dot: false,  src: './**/*', dest: 'dist'}
                ]
            }
        },
	});
};