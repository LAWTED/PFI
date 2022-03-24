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
