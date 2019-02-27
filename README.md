# Node Export & Require Styles




See the README.md in each folder

## Use
- cd into an example directory
```
$ npm i
$ node test.js
```
Output goes to the console.

If you want to make changes and rebuild
- make changes in the /src/*.js file, then
```js
$ npm run build
```


## Export Styles Summary


**Export a traditional function**
```js
module.exports.add = function(a, b) {
  return a + b
}
```

**Export default**
```js
const add = (a, b) => {
  return a + b
}
export default add
```

**Export an arrow function**
```js
module.exports.add = (a, b) => {
  return a + b
}
```

**Export multiple via default as object**
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