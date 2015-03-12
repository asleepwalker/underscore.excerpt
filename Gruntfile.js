module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js', 'lib/*.js', 'test/*.js'],
			options: {
				jquery: true,
				globals: {
					console: true,
					module: true,
					document: true
				}
			}
		},
		jscs: {
			src: ['Gruntfile.js', 'lib/*.js', 'test/*.js'],
			options: {
				preset: 'airbnb',
				validateIndentation: '\t',
				disallowMultipleVarDecl: null,
				requireMultipleVarDecl: true,
				requireCurlyBraces: ['if', 'else', 'for', 'while', 'do', 'try', 'catch', 'case']
			}
		},
		qunit: {
			all: ['test/index.html']
		}
	});

	grunt.registerTask('test', ['jshint', 'jscs', 'qunit']);
	grunt.registerTask('default', ['test']);
};
