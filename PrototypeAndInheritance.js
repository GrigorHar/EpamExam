
//  2 объекта: animal и cat,
// объект animal добавить свойство move, объект cat должен наследовать свойство move
function Animal(name) {
    this.name = name
    this.canWalk = true
}
let animal = new Animal("Cat")

function Cat(name) {
    this.name = name
}
Cat.prototype = animal
let cat1 = new Cat('CAT1')
Animal.prototype.move = function () { return 'Move animal' }
console.log(cat1.move())
