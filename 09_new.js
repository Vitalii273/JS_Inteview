function Cat(color, name) {
    this.color = color
    this.name = name
}

const cat = new Cat('black', 'Kot')
console.log(cat)

//own new
function myNew(constructor, ...args) {
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
}

const cat1 = myNew(Cat, 'black', 'Kitty')
console.log(cat1)

// =========================
function myNew1(constructor, ...args) {
    const obj = Object.create(constructor.prototype)
    return constructor.apply(obj, args) || obj
}

function Person(name) {
    this.name = name
}

const rodion = myNew1(Person, 'Rodion')
console.log(rodion)
console.log(rodion.constructor === Person) //true
