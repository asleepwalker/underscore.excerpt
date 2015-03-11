#Underscore.Excerpt

Smarter select query from [Underscore.js](https://github.com/jashkenas/underscore) collections.

```
var kitties = _.excerpt(felids, {
	species: 'cat',
	aggressive: {'operator': '==', value: false}, // Has not remarks
	ageInDays: {'operator': '<', value: 50}
});
```
