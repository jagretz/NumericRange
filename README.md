## Synopsis
Numeric Range constructor written in javascript based off [David Flanagans](https://github.com/davidflanagan) Range.

## Example
Range is instantiated via the 'new' keyword and supplies 2 convenience methods, `includes()` and `forEach()` as well as overloading the `toString()` method on `Object`.

To create a new Range
```
var range = new Range(2, 5);
```
Touching functionality
```
range.includes(2); // true
range.includes(48); // false

// prints the numbers 2 3 4 5 each on their own line
range.forEach(function(n) {
	console.log('number ');
});

range.toString() // 2...5
```

