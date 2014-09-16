**Underscore.ExtendedWhere**

Smarter select from [Underscore.js][] and [Backbone.js][] collections.

```
var kitties = felids.extendedWhere({
	species: 'cat',
	aggressive: {'operator': '==', value: false}, // Has not remarks
	ageInDays: {'operator': '<', value: 50}
});
```

 [Backbone.js]: https://github.com/jashkenas/backbone
 [Underscore.js]: https://github.com/jashkenas/underscore