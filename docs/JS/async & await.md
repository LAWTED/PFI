# async and await

## async returns
async only return a promise
```js
async function test1() {
  return 1;
}

async function test2() {
  return Promise.resolve(2)
}

const result1 = test1()
const result2 = test2()
console.log('result1', result1) // result1 Promise {<fulfilled>: 1}
console.log('result2', result2) // result2 Promise {<pending>}
```

## await == .then

### await + Promise.resolve()
```js
async function test3() {
  const p3 = Promise.resolve(3)
  // p3.then(data => {
  //   console.log('data', data)
  // })
  const data = await p3
  console.log(data)
}
test3() // 3
```
.then can be replaced by await

### await + auto capsulate
```js
async function test4() {
  const data = await 4 // await Promise.resolve(4)
  console.log(data)
}
test4() // 4
```
await will capsulate `4` as Promise.resolve(4)

### await + after console
```js
async function test4() {
  await 4
  console.log('async') // Promise.resolve(4).then(() => console.log('async'))
}
test4() // 4
```
hence the `console` after the `await` is a async micro task

```js
async function async1() {
  console.log('async1 start') // sync
  await async2() // sync
  console.log('async1 end') // micro
}
async function async2() {
  console.log('async2') //sync
}
```
the `console` after the wait is the micro task which can be seen like `promise.resolve(async2()).then(console.log('async1 end')` and async2 is a sync function but `console.log('async2')` is sync

### await + async function
```js
async function test1() {
  return 1;
}

async function test5() {
  const data = await test1() // await Promise.resolve(1)
  console.log(data)
}
test5() // 1
```

## .catch == try ... catch
```js
async function test6() {
  const p6 = Promise.reject(6)
  try {
    const data6 = await p6
  } catch (err) {
    console.log(err)
  }
}
test6() // 6
```

## async arrow function

<CodeGroup>
<CodeGroupItem title= "origin">

```js
async function foo() {

}
```
</CodeGroupItem>

<CodeGroupItem title= "arrow" active>

```js
const foo = async () => {

}
```

</CodeGroupItem>
</CodeGroup>