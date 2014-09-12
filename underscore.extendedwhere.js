_.extendedWhere = function(list, attrs, after) {
	var direct = {},
	    expressions = {};

	for (var key in attrs) {
		if (_.has(attrs[key], 'operator') && _.has(attrs[key], 'value'))
			expressions[key] = attrs[key];
		else direct[key] = attrs[key];
	}

	return _.filter(list.where(direct), function(obj) {
		for (var key in expressions) {
			switch (expressions[key].operator) {
				case '==': { if (obj.get(key) == expressions[key].value) return obj; else break; }
				case '<': { if (+obj.get(key) < +expressions[key].value) return obj; else break; }
				case '<=': { if (+obj.get(key) <= +expressions[key].value) return obj; else break; }
				case '>': { if (+obj.get(key) > +expressions[key].value) return obj; else break; }
				case '>=': { if (+obj.get(key) >= +expressions[key].value) return obj; else break; }
				case 'regexp': { if (expressions[key].value.test(obj.get(key))) return obj; else break; }
			}
		}
	});
};

if (Backbone) {
	Backbone.Collection.prototype.extendedWhere = function(attrs, after) {
		return _.extendedWhere(this, attrs, after);
	};
}