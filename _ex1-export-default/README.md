## Ex 1

**src/add.js**
```js
const add = (a, b) => {
  return a + b
}
export default add
```

**lib/add.js**
```js
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const add = (a, b) => {
  return a + b;
};

var _default = add;
exports.default = _default;
```

**test.js**
```js
var add = require('./lib/add').default
console.log(add(1,3))
```