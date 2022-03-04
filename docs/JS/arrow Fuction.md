# Arrow Funciton

## Arguments binding
Arrow function do not have an `arguments` binding. However they can access to the arguments by `rest arguments`

<CodeGroup>
  <CodeGroupItem title="Regular">

```js
function foo () {
  console.log(...arguments)
}
foo(1,2,3) // 1 2 3
```
  </CodeGroupItem>

  <CodeGroupItem title="Arrow" active>

```js
const foo = (...args) => {
  console.log(...args)
}
foo(1,2,3) // 1 2 3
```

  </CodeGroupItem>
</CodeGroup>

## `this`
arrow function do not have their own `this`, he `stole` the `this` from the closest non-arrow parent function

```js
var scope = 'outer'
let foo = {
  scope: 'insider',
  arrow: () => {
    console.log('Arrow is in ' + this.scope)
  },
  regular () {
    console.log('Regular is in ' + this.scope)
  }
}
foo.arrow()   // Arrow is in outer
foo.regular() // Regular is in insider
```

## Using new keyword
arrow function can not be used as constructor functions. Hence, they can never be invoked with the `new` keyword
```js
let foo = () => {
  console.log('hi')
}
new foo()
// VM339:4 Uncaught TypeError: foo is not a constructor
// at <anonymous>:4:1
```

## No duplicate named parameters
In regular function we can use duplicate named parameters(not used often, and also can not in 'use strict')
<CodeGroup>
<CodeGroupItem title='Regular'>

```js
function foo(x, x) {
  console.log(x)
}
foo(1, 2)
// 2
```
</CodeGroupItem>

<CodeGroupItem title='Arrow' active>

```js
const foo = (x, x) => {
  console.log(x)
}
foo(1, 2)
// Uncaught SyntaxError: Duplicate parameter name not allowed in this context
```
</CodeGroupItem>

</CodeGroup>

