var qunit = require('qunit');

qunit.run({
    code: {
		path: 'src/underscore.excerpt.js',
		namespace: 'excerpt'
    },
    tests: [
		'test/test.js'
    ]
});
