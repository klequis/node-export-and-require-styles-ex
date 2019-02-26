var math = require('./lib/math').default
console.log(math.add(1,3))

// you could also do this
var add = require('./lib/math').default.add
console.log(add(1,3))




