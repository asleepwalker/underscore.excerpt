#Underscore.Excerpt [![Build Status](https://travis-ci.org/asleepwalker/underscore.excerpt.svg?branch=master)](https://travis-ci.org/asleepwalker/underscore.excerpt) [![Dependency Status](https://gemnasium.com/badges/github.com/asleepwalker/underscore.excerpt.svg)](https://gemnasium.com/github.com/asleepwalker/underscore.excerpt)

Smarter select queries from [Underscore.js](https://github.com/jashkenas/underscore) collections.

```
var kitties = _.excerpt(felids, {
	species: 'cat',
	aggressive: { operator: '==', value: false }, // Has not remarks
	ageInDays: { operator: '<', value: 50 }
});
```

## Usage

Underscore.Excerpt plugin extends `filter` method by custom operators. By default filter hash consists of primitive values, but if you want to get some flexibility, set an object with a comparative `operator` and argument `value` fields.

Available operators:
* `<` for lower than
* `>` for greater than
* `<=` for lower than or equivalent
* `>=` for greater than or equivalent
* `==` for non-strict comparison (e.g. `'' == false`)
* `!=` for non-strict not equivalent
* `regexp` for test a value with a regular expression

## License

The MIT License.