var factory = require('./AccumulatorFactory');
var ac1 = factory();
console.log("ac1 init value "+ac1.getResult());
ac1.add(100);
console.log(ac1.getResult());
console.log("ac2");
var ac2 = factory();
console.log("ac2 init value "+ac2.getResult());
ac2.add(10);
ac2.multiply(30);
console.log(ac2.getResult());