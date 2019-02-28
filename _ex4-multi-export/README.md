## Ex 4-multi-export

**src/math.js**
```js
const add = (a, b) => {
  return a + b
}

const subtract = (a, b) => {
  return a - b
}
export {
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
exports.subtract = exports.add = void 0;

const add = (a, b) => {
  return a + b;
};

exports.add = add;

const subtract = (a, b) => {
  return a - b;
};

exports.subtract = subtract;
```

**test.js**
```js
const add = require('./lib/math').add
const subtract = require('./lib/math').subtract

console.log('add(1,3) =>', add(1,3))
console.log('subtract(4,2) =>', subtract(4,2))
```
