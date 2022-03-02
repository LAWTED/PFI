# Debounce

> Trigger the function in N sec, but if it's triggered again in N sec, then restart the timer, Or we want to save changes on a form, but only when the user is not actively working on those changes, as every "save" costs a database trip
## Loadash
[debounce in loadash](https://lodash.com/docs/4.17.15#debounce)
```js
_.debounce(saveInput, 300);
```

## Simple Implementation

``` js
var timer;
const debounce = ((fn,delay) => {
  clearTimeout(timer)
  timer = setTimeout(() => fn(), delay)
})
```
use `onMouseMove` to test the debounce function
```js
const test = () => {
  console.log('test')
}
document.onmousemove = () => {
  debounce(test, 1000)
}
```
But here is a problem, `timer` is in the parent scope and in order to implement into a single function, we use `closure` to solve the problem

## Optimized Code
```js
const debounce = (fn, delay) => {
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}
```
what if we need pass the arguments? Then we need to `apply` the function
```js
const debounce = (fn, delay) => {
  let timer
  return function () {
    clearTimeout(timer)
    const functionCall = () => fn.apply(this, arguments)
    timer = setTimeout(functionCall, delay)
  }
}
```

Using the function
```js
window.addEventListener('keyup', debounce((e) => {
  console.log(e);
}, 1000));
```

## Step by Step

1. Create a wrapper function with two arguments (fn, delay)
2. Declare the `timer` variable, which will be undefined til is set in the returned funciton
3. Return a function - This will be call everytime when the function is called, and make sure it'is not a arrow function or will lose the context
4. Apply `this` context to callback function, and attach the arguments
5. clearTimeout if `timer` is not `undefined`
6. setTimeout and pass the applied function

::: tip
1. Because we don't know how many arguments will be passed, so we use `fn.apply`
2. The return funciton will take the arguments that the event handler should get - even if they aren't explicitly declared in the function.Just use `arguments`
:::

## Conclusion
> This is a simple problem with a solution spanning 11 lines, but it covers a lot of different concepts that can show a deeper understanding of JavaScript if done correctly, like persisting this, returning a function, and the .apply() method, all encapsulated inside a practical problem that can be used in the real world.






