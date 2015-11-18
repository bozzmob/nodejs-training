/*
create an object
- add(n)
- subtract(n)
- multiply(n)
- divide(n)
- getResult(n)

Usage:
accumulator.add(100);
accumulator.subtract(50);
accumulator.divide(2);
accumulator.multiply(10);
console.log(accumulator.getResult()) => 250
*/

console.log("loading accumulator");
var result=0;
var accumulator= {
	add : function (x) {
	result+=x;
	},

	subtract: function (x) {
	result-=x;
	},

	multiply: function (x) {
	result*=x;
	},

	divide: function (x) {
	result/=x;
	},

	getResult: function () {
		return result;
	}
};

module.exports = accumulator;