/* Create a calc obj with following methods
-add(x,y)
-subtract(x,y)
-multiply(x,y)
-divide(x,y)

invoke above methods for x=100 and y=50 and print the results
*/

var calculator= {
	add : function (x,y) {
	return x+y;
	},

	subtract: function (x,y) {
	return x-y;
	},

	multiply: function (x,y) {
	return x*y;
	},

	divide: function (x,y) {
	return x/y;
	}
};

module.exports = calculator;