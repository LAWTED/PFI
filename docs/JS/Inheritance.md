# Inheritance

## prototype chain inheritance
```js
function Parent() {
  this.name = 'Lawted'
}
Parent.prototype.getName = function () {
  console.log(this.name)
}
function Child () {

}
Child.prototype = new Parent()
let child1 = new Child()
console.log(child1.getName()) // Lawted
```
Attribute of reference types are shared by all instances, which means once you modify it, other will be modified also

```js
let i = 0
function Parent() {
  this.names = ['Lawted', 'Wu']
  i += 1
}
function Child() {
  this.age = 5
}
Child.prototype = new Parent()
console.log(Child.prototype.names) // ['Lawted', 'Wu']
let child1 = new Child()
child1.names.push('child1')
console.log(child1.names) // ['Lawted', 'Wu', 'child1']
let child2 = new Child()
console.log(child2.names) // ['Lawted', 'Wu', 'child1']
console.log(Child.prototype)
console.log(i) // 1
```
:::tip Disadvantage
* Attribute of reference types are shared by all instances
* Cannot pass args to the Parents
The Reason why reference types are shared is when we `console.log(chidl1)` the object is empty which means when we try to find child1.names actually we find the child1.prototype.names
:::

## Use `call()` to construct
```js
function Parent () {
  this.name = ['Lawted', 'Wu']
}
function Child () {
  Parent.call(this)
}
let child1 = new Child()
child1.name.push('Child1')
console.log(child1.name) // ['Lawted', 'Wu', 'Child1']
let child2 = new Child()
child2.name.push('Child2')
console.log(child2.name) // ['Lawted', 'Wu', 'Child2']
```
and it avoid to share the property, also can pass args to Parent, if we `console.log(child1)` we can find the object has its own property name which is different from the prototype case

```js
let i = 0
function Parent (name) {
    this.name = name;
    this.setName = () => {}
    i += 1
}
Parent.prototype.setAge = function () {}
function Child (name) {
    Parent.call(this, name);
}
var child1 = new Child('kevin');
console.log(child1.name); // kevin
var child2 = new Child('daisy');
console.log(child2.name); // daisy
console.log(i) // 2
```
:::tip Disadvantage
Each subclass has a copy of the parent class instance function, which affects performance
:::
## Combination Inheritance
Combination Inheritance use prototye and call together. Use `call()` to get each child a `colors` attribute and use prototype
```js
let i = 0
function Parent () {
  i += 1
  this.colors = ['red', 'blue', 'yellow']
}
function Child(name) {
  Parent.call(this)
  this.name = name
}
Child.prototype = new Parent()
Child.prototype.constructor = Child
let child1 = new Child('Lawted')
child1.colors.push('black')
console.log(child1)
// {
//   "colors": ["red","blue","yellow","black"],
//   "name": "Lawted"
// }
let child2 = new Child('Wu')
child2.colors.push('green')
console.log(child2)
// {
//   "colors": ["red","blue","yellow","green"],
//   "name": "Wu"
// }
console.log(i) // 3
```
In any case, the parent constructor is called twice: once when the child's prototype is created, and once inside the child's constructor