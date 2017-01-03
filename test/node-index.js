/*
*	Underscore.Excerpt, v1.0.2
*	(c) 2014–2017 Artyom "Sleepwalker" Fedosov <mail@asleepwalker.ru>
*	https://github.com/asleepwalker/underscore.excerpt
*/

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
