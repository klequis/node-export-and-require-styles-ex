# Ex2 - Export Traditional Function

**src/add.js**
```js
module.exports.add = (a, b) => {
  return a + b
}
```

**lib/add.js**
Interestingly, Babel retains the arrow function. Likely has implications on compatibility for your NodeJS version.
```js
"use strict";

module.exports.add = (a, b) => {
  return a + b;
};
```

**test.js**
```js
var add = require('./lib/add').add
console.log(add(1,3))
```