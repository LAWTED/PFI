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
function Parent() {
  this.names = ['Lawted', 'Wu']
}
function Child() {

}
Child.prototype = new Parent()
let child1 = new Child()
child1.names.push('child1')
console.log(child1.names) // ['Lawted', 'Wu', 'child1']
let child2 = new Child()
console.log(child2.names) // ['Lawted', 'Wu', 'child1']
```
:::tip Disadvantage
* Attribute of reference types are shared by all instances
* Cannot pass args to the Parents
:::

## Use `call()` to construct
