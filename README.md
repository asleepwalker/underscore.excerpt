**Underscore.ExtendedWhere**

Smarter select from [Underscore.js][] collections.

```
var kitties = felids.extendedWhere({
	species: 'cat',
	aggressive: {'operator': '==', value: false}, // Has not remarks
	ageInDays: {'operator': '<', value: 50}
});
```

 [Underscore.js]: https://github.com/jashkenas/underscore