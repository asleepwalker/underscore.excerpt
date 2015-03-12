module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js', 'lib/*.js', 'test/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		jscs: {
			src: ['Gruntfile.js', 'lib/*.js', 'test/*.js'],
			options: {
				config: '.jscsrc'
			}
		},
		qunit: {
			all: ['test/index.html']
		}
	});

	grunt.registerTask('test', ['jshint', 'jscs', 'qunit']);
	grunt.registerTask('default', ['test']);
};
