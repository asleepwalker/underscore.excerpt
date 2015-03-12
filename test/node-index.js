var qunit = require('qunit');

qunit.run({
    code: {
		path: 'lib/underscore.excerpt.js',
		namespace: 'excerpt'
    },
    tests: [
		'test/test.js'
    ]
});
