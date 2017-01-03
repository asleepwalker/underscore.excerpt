/*
*	Underscore.Excerpt, v1.0.2
*	(c) 2014–2017 Artyom "Sleepwalker" Fedosov <mail@asleepwalker.ru>
*	https://github.com/asleepwalker/underscore.excerpt
*/

_.excerpt = function(list, attrs, after) {
	var direct = {},
		expressions = {},
		matched = [],
		key,
		val,
		operator;

	_.each(attrs, function(filterVal, filterKey) {
		if (_.has(filterVal, 'operator') && _.has(filterVal, 'value')) {
			expressions[filterKey] = filterVal;
		} else {
			direct[filterKey] = filterVal;
		}
	});

	matched = _.where(list, direct);

	_.each(expressions, function(filterVal, filterKey) {
		val = filterVal.value;
		operator = filterVal.operator;

		matched = _.filter(matched, function(obj) {
			switch (operator) {
				case '==': {
					if (obj[filterKey] == val) {
						return obj;
					}
					break;
				}
				case '!=': {
					if (obj[filterKey] != val) {
						return obj;
					}
					break;
				}
				case '<': {
					if (+obj[filterKey] < +val) {
						return obj;
					}
					break;
				}
				case '<=': {
					if (+obj[filterKey] <= +val) {
						return obj;
					}
					break;
				}
				case '>': {
					if (+obj[filterKey] > +val) {
						return obj;
					}
					break;
				}
				case '>=': {
					if (+obj[filterKey] >= +val) {
						return obj;
					}
					break;
				}
				case 'regexp': {
					if (val.test(obj[filterKey])) {
						return obj;
					}
					break;
				}
			}
		});
	});
	return matched;
};
