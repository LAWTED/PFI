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

## Object.create()
```js
function createObj(o) {
  function F() {}
  F.prototype = o
  return new F()
}
```
:::tip disadvantage
Property values that contain reference types always share the corresponding value, just like prototype chain inheritance
:::
```js
function createObj(o) {
  function F() {}
  F.prototype = o
  return new F()
}
let person = {
  name: 'Lawted',
  colors: ['red', 'yellow']
}
let person1 = createObj(person)
let person2 = createObj(person)
person1.name = 'person1'
console.log(person1,person2)
person1.colors.push('black')
console.log(person2.colors)
```
:::tip
when we set `person1.name`, the `person1.__proto__` has `name` and person1 do not has `name`, so added the name value to person1 instead of modifying the name value on the prototype
:::

## Parasitic Compositional Inheritance
<CodeGroup>
  <CodeGroupItem title="Regular">

```js
let i = 0
function Parent (name) {
  i += 1
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
Parent.prototype.getName = function () {
  console.log(this.name)
}
function Child (name, age) {
  Parent.call(this, name)
  this.age = age
}


Child.prototype = new Parent()
let child1 = new Child('Lawted', '18')
console.log(child1, Child.prototype)
console.log(i) // 2
```

  </CodeGroupItem>

  <CodeGroupItem title="Optimized" active>

```js
let i = 0
function Parent (name) {
  i += 1
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
Parent.prototype.getName = function () {
  console.log(this.name)
}
function Child (name, age) {
  Parent.call(this, name)
  this.age = age
}
var F = function () {}
F.prototype = Parent.prototype
Child.prototype = new F()
let child1 = new Child('Lawted', '18')
console.log(child1, Child.prototype)
console.log(i) // 1
```
  </CodeGroupItem>

</CodeGroup>

`console.log(i)` equals to 2 in `Regular` beacause
```js
Child.prototype = new Parent()
let child1 = new Child('Lawted', '18')
```
:::tip
child1 has `colors` and Child.prototype also have `colors` which is useless
:::



`console.log(i)` equals to 1 in `Regular` beacause
```js
F.prototype = Parent.prototype
```
and when we new F() F is an empty function





```mermaidjs
graph LR
  A(Parent) --> |prototype|B(Person.prototype)
  C(Child.prototype) -->|__proto__|B
  D(child1) --> |__proto__|C
```

```mermaidjs
graph LR
  A(Parent) --> |prototype|B(Person.prototype)
  F(F.prototype) --> |__proto__|B
  C(Child.prototype) -->|__proto__|F
  D(child1) --> |__proto__|C
```
as we can see we use a empty function and let `child.prototype` access `parent.prototype` indirectly

## ES6 Class
```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  showName() {
    console.log(this.name, 'Person')
  }
}

class Student extends Person {
  constructor (name, age, id) {
    super(name,age)
    this.id = id
  }
}
let student1 = new Student('Lawted', 18, '001')
console.log(student1)
student1.showName() // Lawted Person
```
call the constructor of the parent class through `super`
