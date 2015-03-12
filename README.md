#Underscore.Excerpt

Smarter select queries from [Underscore.js](https://github.com/jashkenas/underscore) collections.

```
var kitties = _.excerpt(felids, {
	species: 'cat',
	aggressive: {'operator': '==', value: false}, // Has not remarks
	ageInDays: {'operator': '<', value: 50}
});
```

[![Build Status](https://travis-ci.org/asleepwalker/underscore.excerpt.svg?branch=master)](https://travis-ci.org/asleepwalker/underscore.excerpt)