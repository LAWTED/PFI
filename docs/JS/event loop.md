# Event Loop


```mermaidjs
graph LR
  A(Call Stack) --> |main thread|B{async/sync task}
  B --> C(async task)
  C --> E{micro task/macro task}
  E --> F(micro task)
  E --> G(macro task)
  B --> D(sync task)
```



# Micro Task and Macro Task

**macro task will execute after all the micro task is done**

micro task: Promise.then catch finally (ES6)

macro task: setTimeout/setTimeInterval, requestAnimationFrame, I/O (webAPIS)

## why Micro Task is faster than Macro Task
as we can see macro task are webAPIs and micro task is ES6 standard. Hence macro task need to insert to webAPIs stack and go though to the call back queue but micro task will go to micro task queue directly.one more thing DOM render is after micro task and before macro task.And U can see the loop of micro task is shorter than macro

```mermaidjs
graph LR
  A(micro task) --> B(DOM Render)
  B --> C(macro task)
```

```js
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(function () {
  console.log('setTimeout')
},0)
async1()
console.log('script middle')
new Promise(function(resolve) {
  console.log('promise1')
  resolve()
  console.log('promise3')
}).then(function () {
  console.log('promise2')
})
console.log('script end')
```

```mermaidjs
graph TD
    A(Call Stack)
    B(Web APIs)
    C(Micro task Queue)
    D(Macro task Queue/Callback Queue)
    E(DOM Render)
    A -->|Macro task| B
    B -->|Macro task| D
    D -->|Macro task| A
    D ==>|Event Loop| A
    A ==>|Event Loop| C
    C ==>|Event Loop| E
    E ==>|Event Loop| D
    A -.->|Micro task| C
    C -.->|Micro task| A
```



| sync          | micro      | macro/callback queue |
| ------------- | ---------- | -------------------- |
| script start  | async1 end | setTimeout           |
| async1 start  |            |                      |
| async2        |            |                      |
| script middle |            |                      |
| promise1      | promise2   |                      |
| promise3      |            |                      |
| script end    |            |                      |

```output
---sync

script start
async1 start
async2
script middle
promise1
promise3
script end
---micro

async1 end
promise2
---macro

setTimeout
```

:::tip
why async2 is in sync stack? [here!](http://localhost:1234/JS/async%20&%20await.html#await-after-console)
:::
