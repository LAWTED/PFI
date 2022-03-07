# let vs var

## Global Property
At the top level of programs and funcitons, `let` does not create a property on the global object
```js
var scope1 = 'global'
let scope2 = 'global'
console.log(this.scope1) // global
console.log(this.scope2) // undefined
```

## Redeclarations
Redeclaring the same variable within the same function or block scope raises a `SytaxError`

```js
let foo
let foo
// Uncaught SyntaxError: Identifier 'foo' has already been declared
```

### Redelarations in Switch
<CodeGroup>
<CodeGroupItem title='Wrong'>

```js
let x = 1
switch (x) {
  case 0:
    let foo
    break


  case 1:
    let foo
    break

}
// Uncaught SyntaxError: Identifier 'foo' has already been declared
```
</CodeGroupItem>

<CodeGroupItem title='Right' active>

```js
let x = 1
switch (x) {
  case 0: {
    let foo
    break
  }

  case 1: {
    let foo
    break
  }
}
// No Probs
```
</CodeGroupItem>
</CodeGroup>

## Temporal dead zone (TDZ)
The variable is said to be in a `temporal dead zone (TDZ)` frome the start of the block until the declaration has completed
```js
{
  // TDZ begin
  console.log(bar) // undefinded
  console.log(foo) // ReferenceError
  var bar = 1
  let foo = 2 // End of TDZ()
}
```

The difference of `let` and `var` is that `let` is initialniszed only when the declaration is completed, but `var` , as we all know, it has hoisting

## TDZ combined with lexical scoping
The identifier `foo`a inside the `if` block is the `let foo`. Hence expression `(foo + 55)` throws a `ReferenceError` because of `let foo` has not completed, and it is still a temporal dead zone
```js
function test() {
  var foo = 33
  if (foo) { // var foo
    let foo = (foo + 55) // ReferenceError
  }
}
test()
```
