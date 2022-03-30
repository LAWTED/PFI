# is Array

## typeof 👎
use `typeof` to can only check it's basic type

```js
const a = null
const b = {}
const c = []
console.log(typeof(a)) // Object
console.log(typeof(b)) // Object
console.log(typeof(c)) // Object
```

![](/images/typeof_table.png)

## instanceof 👍

The `instanceof` operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of the object
```js
object instanceof constructor
```

```js
const a = []
const b = {}
console.log(a instanceof Array) // true
console.log(a instanceof Object)// true
console.log(a instanceof Array) // false
```

## constructor 👍
[see constructor here](./prototype.md)

```js
const a = [];
console.log(a.constructor); //function Array(){ [native code] }
```
but constructor can be rewrite so it's not so good.

## Object.prototype.toString 👍
```js
const a = ['Hello','Howard'];
const b = {0:'Hello',1:'Howard'};
const c = 'Hello Howard';
a.toString();//"Hello,Howard"
b.toString();//"[object Object]"
c.toString();//"Hello,Howard"
```
except object others `.toString()` has be rewrite, so we need to `call` the Object's `toString`

```js
const a = ['Hello','Howard'];
const b = {0:'Hello',1:'Howard'};
const c = 'Hello Howard';
Object.prototype.toString.call(a);//"[object Array]"
Object.prototype.toString.call(b);//"[object Object]"
Object.prototype.toString.call(c);//"[object String]"
```

## isArray 💯
a new api in ES6
```js
const a = []
const b = {}
Array.isArray(a) // true
Array.isArray(b) // false
```

implement it by self
```js
const isArray = (arg) => {
  return Object.prototype.toString.call(arg) === '[object Array]'
}
```

