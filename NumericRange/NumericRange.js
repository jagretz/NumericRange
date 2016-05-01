(function(){
	'use strict';

	/**
	 * Creates a immutable numeric range supplied with a from and to values.
	 * Supports integers, decimals and native string conversion.
	 * Does not support types {@code NaN} or {@code infinity} but will natively convert a {@code string}
	 * containining a number to it's numeric equivelant.
	 * @param {number} from - start of the range.
	 * @param {number} to - end of the range.
	 * @constructor
	 */
	function Range(from, to) {
		var from;
		var to;

		if (!from || !to) throw new TypeError('A supplied to or from value was undefined or null');

		// isNaN does not catch all instances when x is Not a Number. For instance, "blablabla"
		// passes the isNaN check. Therefore we first attempt to convert the property to a number value.
		from = Number(from);
		to = Number(to);
		if (isNaN(from) || isNaN(to)) throw new TypeError('Range does not support values other than numbers');
		if (!Number.isFinite(from) && !Number.isFinite(to)) throw new RangeError('Range does not support infinity');

		/**
		 * Define a an immutable data descriptor for the 'from' value.
		 */
		Object.defineProperty(this, 'from', {
			value: from,
			writable: false
		});

		/**
		 * Define a an immutable data descriptor for the 'to' value.
		 */
		Object.defineProperty(this, 'to', {
			value: to,
			writable: false
		});
	}

	/**
	 * Modify the {@code Range prototype} with service functionality.
	 */
	Range.prototype = {
		includes: includes,
		forEach: forEach,
		toString: toString,
	};

	/**
	 * Does not implement number validation before checking the range.
	 * @param {number} n - the number to check
	 * @return {boolean} ture is the n falls within range inclusive.
	 * @public
	 */
	function includes(n) {
		return n >= this.from && n <= this.to;
	}

	/**
	 * Executes func for each value within the range inclusive strating from the beginning of the range.
	 * @param {function} func - the function to execute for each number in sequence.
	 * @public
	 */
	function forEach(func) {
		for (var n = Math.ceil(this.from); n <= this.to; n++) {
			func(n);
		}
	}

	/**
	 * @return {string} a string representation of the range as 'from...to'
	 * @public
	 */
	function toString() {
		return this.from + '...' + this.to;
	}

})();
