# Hoisting

## Function hoisting
```js
console.log(a) //[Function: a]
var a
function a(){
  console.log('hello')
}
```
the funciton declaration also will be hoisted and higher priority than variable, like copy and paste to the top, hence we show it at the begining

## Simple Example
<CodeGroup>
<CodeGroupItem title= "origin">

```js


console.log(a)
var a = 10
```

</CodeGroupItem>
<CodeGroupItem title= "image">

```js
// Not how exactly works in JS, but we can think like this
var a
console.log(a)
a = 10
```

</CodeGroupItem>
</CodeGroup>


## In function
the passed in variable is also need to consider
<CodeGroup>
<CodeGroupItem title= "origin">

```js
function test(v) {


  console.log(v) // 10
  var v = 3
}
test(10)
```

</CodeGroupItem>
<CodeGroupItem title= "image">

```js
function test(v) {
  var v = 10
  var v // passed
  console.log(v) // 10
  v = 3
}
test(10)
```

</CodeGroupItem>
</CodeGroup>
when `10` is passed into the function `test` ,there will be a declaration at the top of the function block

:::tip
Maybe you think it will be owerwrite by `undefined`, then we check it out
:::

<CodeGroup>
<CodeGroupItem title= "origin">

```js
var v = 10
var v

console.log(v) // 10
```

</CodeGroupItem>
<CodeGroupItem title= "image">

```js
var v
var v
v = 10
console.log(v)
```

</CodeGroupItem>
</CodeGroup>

## let/const hoisting
variable declared with `let` and `const` are also hoisted, but not like `var`, are not initialized with default value. An exception will be thrown, which means its a temporary dead zone(TDZ) see at `let vs var`
```js
{
console.log(foo)
let foo = 6
// Uncaught ReferenceError: Cannot access 'foo' before initialization
}
```

## declare with no var
```js
console.log(a)
a = 1
// VM35:1 Uncaught ReferenceError: a is not defined
```
declare without var won't hoisting