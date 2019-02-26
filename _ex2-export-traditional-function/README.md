# Ex2 - Export Traditional Function

**src/add.js**
```js
module.exports.add = function(a, b) {
  return a + b
}
```

**lib/add.js**
```js
module.exports.add = function(a, b) {
  return a + b
}
```

**test.js**
```js
var add = require('./lib/add').add
console.log(add(1,3))
```