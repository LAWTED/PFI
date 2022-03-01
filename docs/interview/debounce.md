---
title: Debounce
description: 手写防抖节流
---

# Debounce

> 事件被触发的N秒内再执行回调,如果在这个n秒内又被触发,则重新计时

### 最简单的防抖代码

``` js
var timer;
const debounce = ((fn,delay) => {
  clearTimeout(timer)
  let timer = setTimeout(() => fn(), delay)
})
```