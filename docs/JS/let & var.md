# let
let is not generate in the `window` object
```js
var scope1 = 'global'
let scope2 = 'global'
console.log(this.scope1) // global
console.log(this.scope2) // undefined
```
