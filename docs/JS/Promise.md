# Promise

## state
* pending
* resolve
* reject
talk is cheap, show me your code
<CodeGroup>
<CodeGroupItem title= "pending">

```js
const p1 = new Promise((resolve, reject) => {

})
console.log(p1)
// Promise {<pending>}
```

</CodeGroupItem>
<CodeGroupItem title= "resolve">

```js
const p1 = new Promise((resolve, reject) => {
  resolve()
})
console.log(p1)
// Promise {<fulfilled>: undefined}
```

</CodeGroupItem>

<CodeGroupItem title= "reject">

```js
const p1 = new Promise((resolve, reject) => {
  reject()
})
console.log(p1)
// Promise {<rejected>: undefined}
```

</CodeGroupItem>
</CodeGroup>

## asynchromous
```js
const p1 = new Promise((resolve,reject) => {
  console.log('promise init')
  setTimeout(() => {
    resolve()
  }, 1000)
})
console.log(p1)
// promise init
// Promise {<pending>}
//    [[Prototype]]: Promise
//    [[PromiseState]]: "fulfilled"
//    [[PromiseResult]]: undefined
```
why the Promise is pending but when we see the object is fulfilled, because whe promise is init and resolve 1000 ms later, hence the right correct execution order is
1. `console.log('promise init')`
2. `add resolve() to the stack`
3. `console.log(p1)`
4. `resolve()`

let's try to add another timer to show the promise status

```js
const p1 = new Promise((resolve,reject) => {
  console.log('promise init')
  setTimeout(() => {
    resolve()
  }, 1000)
})
console.log(p1)
setTimeout(() => {
  console.log(p1)
}, 1000)
// promise init
// Promise {<pending>}
// Promise {<fulfilled>: undefined}
```

## .then and .catch

as we can see, if the promise is in `pending`, then there `.then` and `.catch` will not execute


<CodeGroup>
<CodeGroupItem title= "pending">

```js
const p1 = new Promise((resolve, reject) => {

})

console.log(p1) // Promise {<pending>}

p1
  .then(() => {
    console.log('then') // nothing
  })
  .catch(() => {
    console.log('catch') // nothing
  })
```

</CodeGroupItem>
<CodeGroupItem title= "resolve">

```js
const p1 = new Promise((resolve, reject) => {
  resolve()
}) // or const p1 = Promise.resolve()
console.log(p1) // Promise {<fulfilled>: undefined}

p1
  .then(() => {
    console.log('then') // Output: then
  })
  .catch(() => {
    console.log('catch') // nothing
  })
```

</CodeGroupItem>

<CodeGroupItem title= "reject">

```js
const p1 = new Promise((resolve, reject) => {
  reject()
}) // or const p1 = Promise.reject()
console.log(p1) // Promise {<rejected>: undefined}


p1
  .then(() => {
    console.log('then') // nothing
  })
  .catch(() => {
    console.log('catch') // Output:catch
  })
```

</CodeGroupItem>
</CodeGroup>

## status after .then and .catch

### .then
```js
const p1 = Promise.resolve()
console.log('p1', p1)

const res1 = p1.then(() => {
  console.log('p1 then')
})
setTimeout(() => {
  console.log('res1', res1)
})

const res2 = p1.then(() => {
  throw new Error('err')
})
setTimeout(() => {
  console.log('res2', res2)
})
// p1 Promise {<fulfilled>: undefined}
// p1 then
// Uncaught (in promise) Error: err <anonymous>:12:9
// res1 Promise {<fulfilled>: undefined}
// res2 Promise {<rejected>: Error: err at <anonymous>:12:9}
```
if there is an error in .then function, then it will return a `reject` promise

### .catch
```js
const p1 = Promise.reject()
console.log('p1', p1)

const res1 = p1.catch(() => {
  console.log('p1 catch')
})
setTimeout(() => {
  console.log('res1', res1)
})

const res2 = p1.catch(() => {
  throw new Error('err')
})
setTimeout(() => {
  console.log('res2', res2)
})
// p1 Promise {<rejected>: undefined}
// Uncaught (in promise) Error: err
// res1 Promise {<fulfilled>: undefined}
// res2 Promise {<rejected>: Error: err at <anonymous>:12:9}
```
if there is no error in .catch function, then it will return a `resolve` promise, even though it is a reject promise
In conclusion, no matter it is a p.then or p.catch, and if there is not error threw then return `resolve` status promise, otherwise return `reject`