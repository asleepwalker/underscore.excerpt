**Underscore.ExtendedWhere**

Smarter select from [Underscore.js][] collections.

```
var kitties = felids.extendedWhere({
	species: 'cat',
	aggressive: {'operator': '==', value: false}, // Has not remarks
	ageInDays: {'operator': '<', value: 50}
});
```

Also extends [Backbone.js][].Collection if available.

 [Backbone.js]: https://github.com/jashkenas/backbone
 [Underscore.js]: https://github.com/jashkenas/underscore