# Throttle

![](https://miro.medium.com/max/875/1*Q4d6AAcxvOIwnSwkTlm8GQ.png)

Here is a case, if we wants to print the position of a moving div, we need the use `Throttle` and print every 10 seconds while moving

```js
const throttle = (fn, delay) => {
  let timer
  return function () {
    if (timer) {
      return // if there is a timer waiting just skip the create operation below
    }

    const functionCall = () => fn.apply(this, arguments)
    timer = setTimeout(() => {
      functionCall()
      timer = null // clear timer after the function called
    },delay)
  }
}
```
let's compare `throttle` and `debounce`
```diff
const throttle = (fn, delay) => {
  let timer
  return function () {
+    if (timer) {
+      return // if there is a timer waiting just skip the create operation below
+    }

-    clearTimeout(timer)
    const functionCall = () => fn.apply(this, arguments)
    timer = setTimeout(() => {
      functionCall()
+      timer = null // clear timer after the function called
    },delay)
  }
}
```