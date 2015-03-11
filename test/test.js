/*
*	Underscore.Excerpt, v1.0.2
*	(c) 2014–2015 Artyom "Sleepwalker" Fedosov <mail@asleepwalker.ru>
*	https://github.com/asleepwalker/underscore.excerpt
*/

QUnit.module('General');

QUnit.test('Test modified filter', 11, function(assert) {

	var summits = [
		{ name: 'Everest', range: 'Himalayas', elevation: 8848, firstAscent: 1953, continent: 'Asia', country: 'Nepal' },
		{ name: 'Aconcagua', range: 'Andes', elevation: 6960, firstAscent: 1897, continent: 'South America', country: 'Argentina' },
		{ name: 'McKinley', range: 'Alaska Range', elevation: 6194, firstAscent: 1913, continent: 'North America', country: 'USA' },
		{ name: 'Kilimanjaro', range: null, elevation: 5895, firstAscent: 1889, continent: 'Africa', country: 'Tanzania' },
		{ name: 'Elbrus', range: 'Caucasus Mountains', elevation: 5642, firstAscent: 1829, continent: 'Europe', country: 'Russia' },
		{ name: 'Vinson Massif', range: 'Sentinel Range', elevation: 4892, firstAscent: 1966, continent: 'Antarctica', country: null },
		{ name: 'Puncak Jaya', range: 'Sudirman Range', elevation: 4884, firstAscent: 1936, continent: 'Oceania', country: 'Indonesia' },
		{ name: 'Kosciuszko', range: 'Great Dividing Range', elevation: 2228, firstAscent: 1840, continent: 'Australia', country: 'Australia' },
		{ name: 'K2', range: 'Karakoram', elevation: 8611, firstAscent: 1954, continent: 'Asia', country: 'Pakistan' },
		{ name: 'Lhotse', range: 'Himalayas', elevation: 8516, firstAscent: 1956, continent: 'Asia', country: 'Nepal' },
		{ name: 'Una Peaks', range: null, elevation: 747, firstAscent: 1999, continent: 'Antarctica', country: null }
	];

	assert.deepEqual(_.pluck(_.excerpt(summits, {
		country: null
	}), 'name'), ['Vinson Massif', 'Una Peaks'], 'Casual where');

	assert.deepEqual(_.pluck(_.excerpt(summits, {
		firstAscent: { operator: '>', value: 1980 }
	}), 'name'), ['Una Peaks'], 'Greater than operator');

	assert.deepEqual(_.pluck(_.excerpt(summits, {
		firstAscent: { operator: '<', value: 1900 }
	}), 'name'), ['Aconcagua', 'Kilimanjaro', 'Elbrus', 'Kosciuszko'], 'Lower than operator');

	assert.deepEqual(_.pluck(_.excerpt(summits, {
		elevation: { operator: '>=', value: 8516 }
	}), 'name'), ['Everest', 'K2', 'Lhotse'], 'Greater than or equal operator');

	assert.deepEqual(_.pluck(_.excerpt(summits, {
		elevation: { operator: '<=', value: 3000 }
	}), 'name'), ['Kosciuszko', 'Una Peaks'], 'Lower than or equal operator');

	assert.deepEqual(_.pluck(_.excerpt(summits, {
		elevation: { operator: '>', value: 8600 },
		firstAscent: { operator: '<=', value: 1954 }
	}), 'name'), ['Everest', 'K2'], 'Two params filter');

	assert.deepEqual(_.pluck(_.excerpt(summits, {
		continent: 'Antarctica',
		elevation: { operator: '>', value: 4500 }
	}), 'name'), ['Vinson Massif'], 'Combinating casual where and excerpt-filter');

	assert.deepEqual(_.pluck(_.excerpt(summits, {
		elevation: { operator: '==', value: '6194' }
	}), 'name'), ['McKinley'], 'Not strict equal operator');

	assert.deepEqual(_.pluck(_.excerpt(summits, {
		elevation: { operator: '!=', value: '8611' },
		continent: 'Asia'
	}), 'name'), ['Everest', 'Lhotse'], 'Not strict not equal operator');

	assert.deepEqual(_.pluck(_.excerpt(summits, {
		continent: { operator: 'regexp', value: /America/ }
	}), 'name'), ['Aconcagua', 'McKinley'], 'Regular expression operator');

	assert.deepEqual(_.pluck(_.excerpt(summits, {
		elevation: { operator: '>', value: 5000 },
		firstAscent: { operator: '<', value: 1900 },
		country: { operator: 'regexp', value: /^(Russia|Indonesia|Nepal)$/ }
	}), 'name'), ['Elbrus'], 'Few operators together');

});
