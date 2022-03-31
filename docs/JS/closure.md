# Closure

Closure = function + free variable which can be accessed by the function

:::tip
## free variable
Free variables are simply the variables that are neither locally declared nor passed as parameter.
```js
function foo1() {
  console.log(a) // free!
}
function foo2(a) {
  console.log(a) // Not free variable
}
function foo3() {
  let a = 1 // Not free variable
}
```
:::

```js
var a = 1
function foo() {
  console.log(a)
}
foo()
```
function `foo` + free variable `a` which can be accessed by the function is called `closure`
So, this is a closure
## return a function
```js
function foo() {
  const a = 1 // free variable
  return function() {
    console.log('a', a)
  }
}
const fn = foo()
const a = 2
fn() // '1'
```
closre  = function `foo`  + free variable `a` ==(when defined)==

## funciton as parameter

```js
function foo(fn) {
  const a = 1
  fn()
}
const a = 2 // free variable
function fn() {
  console.log('a', a)
}
foo(fn) // a 2
```
closre  = function `foo`  + free variable `a` ==(when defined)==
## code of debounce
```js
const button = document.getElementById("button");

// debounce handler
const debounce = (fn, delay) => {
  let timer
  console.log('1')
  return function (...args) {
    console.log('2')
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

button.addEventListener(
  "click",
  debounce((e) => {
    console.log(e);
  }, 500)
);
```
button add an eventlistener and it is the function that debounce returned, timer is a free variable and `timer` + `function` is a `closure`
