# this
The value of `this` is determined when the function is executed, not when the function is defined (the opposite of [free variable](./closure.md))
## this and call/apply/bind
```js
function test() {
  console.log('this',this)
}
test() // windows
test.call({name: 'Lawted'}) // {name: 'Lawted'}
test.apply({name: 'Lawted'}) // {name: 'Lawted'}

const boundTest = test.bind({name: 'Lawted'})
bounTest() //{name:'Lawted'}
```
## 4 ways to bind this
### default binding
when the function is called directly, this is the window object
```js
function foo() {
  console.log(this)
}
foo() // Window
```

### implicit binding
`this` points to its caller
```js
function foo() {
  console.log(this)
}
const obj = {
  x: 1,
  foo
}
obj.foo() //obj
foo() // Window
```

```js
const obj = {
    a: function () {
        console.log(this) // obj
        function b () {
            console.log(this) // window
        }
        b()
    }
}
obj.a()
```
`b()` is called directly and no prefix, hence `this` in `b()` is window

### new binding
```js
function test() {
  this.x = 1
}
const obj = new test()
obj.x // 1
```
4 things a `new` did:
1. create a new object
2. make `this` points to the object(also can say make obj.__proto__ = test.prototype)
3. do the things in the function(set the attribute)
4. return obj if the function return a obj, else return the obj created before

### call/bind/apply
we introduce them in a new page!
## class
```js
class Person{
  constructor(name,age) {
    console.log('inside', this) // inside Person {}
    this.name = name
    this.age = age
  }
  test() {
    console.log('outer', this)
  }
  asyncTest() {
    setTimeout(function () {
      console.log('async', this) // window
    }, 0)
  }
}
const person1 = new Person('Lawted', 20)
person1.test() // outer Person {name: 'Lawted', age: 20}
```
the inside one is empty at the first look,but if we unfold the object, it is the same as the outer one,because this is not filled when consoled. In `asyncTest()` this is window because it is operate after all the synchronization function is done,but if we change it to a arrow function then it will stole this from asyncTest which is Person when it is defined
