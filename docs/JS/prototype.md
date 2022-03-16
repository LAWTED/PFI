# Prototype

## new Object by constructor

```js
function Person() {

}
var person = new Person()
person.name = 'Lawted'
console.log(person.name)
```
`Person` is a constructor, and we new a person object

## Prototype
Every function has prototype, the prototype point to a object which is the prototype of the object(person & person2) called by the constructor
```js
function Person() {

}
Person.prototype.name = 'Lawted'
let person = new Person()
let person2 = new Person()
console.log(person.name) // Lawted
console.log(person2.name) // Lawted
```
Every object (except null) is associated with another object. The object is what we call teh prototype, and every object inherits properties from the prototype

```mermaidjs
graph LR
  A(Person) -->|prototype| B(Person.prototype)
```


## `__proto__`
the relation between `person` and `Person.prototype` is `__proto__`

```js
function Person() {


}
var person = new Person()
console.log(person.__proto__ == Person.prototype) // true
console.log(Object.getPrototypeOf(person) == person.__proto__)
```

```mermaidjs
graph LR
    A(Person) -->|prototype| B(Person.prototype)
    A --> |new| C(person)
    C -->|__proto__| B
```

## Constructor
Every prototype has a constructor property point to the construct function
```js
funciton Person() {

}
console.log(Person == Person.prototype.constructor) // true
```

```mermaidjs
graph LR
    A(Person) -->|prototype| B(Person.prototype)
    B -->|constructor| A
    A --> |new| C(person)
    C -->|__proto__| B
```

## Instance and Prototype
When reading the properties of the instance, if it can't find it, it will look for the properties in the prototype associated with the object. If it can't find it, it will find the prototype of the prototype until it finds the topmost level.
```js
function Person() {

}
Person.prototype.name = 'Lawted'
let person = new Person()
person.name = 'wu'
console.log(person.name) // wu
delete person.name
console.log(person.name) // not find keep searching till find Lawted
```

:::error
Wait... What is the prototype of the Person.prototype
:::

## Prototype's Prototype
Because Person.prototype is a object which means it is constructed by function `Object()`, the `Person.prototype.__proto__` is Object.prototype
```js
function Person() {

}
console.log(Person.prototype.__proto__ == Object.prototype) // true
```
```mermaidjs
%%{init: {'theme': 'dark'}%%

graph TD
    A(Person) -->|prototype| B(Person.prototype)
    B -->|constructor| A
    A --> |new| C(person)
    C -->|__proto__| B
    B -->|__proto__| F(Object.prototype)
    E(Object) -->|prototype| F
    F -->|constructor| E
    E --> |new| B
```
the `__proto__` of Object.prototype is null, which means it is not exist

## Prototype Chain
here the prototype chain
```mermaidjs
%%{init: {'theme': 'dark'}%%

graph LR
  A(person) --> |__proto__ |B(Person.prototype)
  B --> |__proto__| C(Object.prototype)
  C --> |__proto__| D(null)
```
:::tip
When getting person.constructor, in fact, there is no constructor property in person. When the constructor property cannot be read, it will be read from the prototype of person, which is Person.prototype, which happens to have this property in the prototype.
```js
function Person() {


}
var person = new Person()
console.log(person.constructor == Person.prototype.constructor) // true
console.log(Person.prototype.constructor === Person) // true
console.log(person.constructor === Person) //true
```
:::
