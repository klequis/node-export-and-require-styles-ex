## Ex 4-multi-export

**src/math.js**
```js
const add = (a, b) => {
  return a + b
}

const subtract = (a, b) => {
  return a - b
}

export default {
  add,
  subtract
}
```

**lib/math.js**
```js
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

var _default = {
  add,
  subtract
};
exports.default = _default;
```

**test.js**
```js
var math = require('./lib/math').default
console.log(math.add(1,3))

// you could also do this but seems long winded and one of the
// following examples will show a better way
var add = require('./lib/math').default.add
console.log(add(1,3))
```
