/*
*	Underscore.Excerpt, v1.0.1
*	(c) 2015 Artyom "Sleepwalker" Fedosov <mail@asleepwalker.ru>
*	https://github.com/asleepwalker/underscore.excerpt
*/

_.excerpt = function(list, attrs, after) {
	var direct = {},
	    expressions = {},
	    matched = [];

	for (var key in attrs) {
		if (_.has(attrs[key], 'operator') && _.has(attrs[key], 'value')) {
			expressions[key] = attrs[key];
		} else {
			direct[key] = attrs[key];
		}
	}

	matched = list.where(direct);
	for (var key in expressions) {
		var val = expressions[key].value;
		    operator = expressions[key].operator;

		matched = _.filter(matched, function(obj) {
			switch (operator) {
				case '==': { if (obj.get(key) == val) return obj; else break; }
				case '<': { if (+obj.get(key) < +val) return obj; else break; }
				case '<=': { if (+obj.get(key) <= +val) return obj; else break; }
				case '>': { if (+obj.get(key) > +val) return obj; else break; }
				case '>=': { if (+obj.get(key) >= +val) return obj; else break; }
				case 'regexp': { if (val.test(obj.get(key))) return obj; else break; }
			}
		});
	}
	return matched;
};

if (Backbone) {
	Backbone.Collection.prototype.excerpt = function(attrs, after) {
		return _.excerpt(this, attrs, after);
	};
}