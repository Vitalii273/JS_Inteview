// __proto__ => parent class ES6
// Object.getPrototypeOf() ES5

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";

function Person1(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person1.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

function Cat(name, color) {
    this.name = name;
    this.color = color
}

Cat.prototype.voice = function () {
    console.log(`Cat ${this.name} says myay`)
}

const cat = new Cat('Kot', 'white')
cat.voice()
console.log(Cat.prototype)
console.log(cat)
console.log(cat.__proto__)
console.log(cat.__proto__ === Cat.prototype) //true
console.log(cat.constructor)

//=========================

function Person2() {
}

Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person2()
person.name = 'Vitalii'
console.log('skin' in person) //true
console.log(person.legs) // 2
console.log(person.name) // 2
console.log(person.eyes) // undefined

console.log(person.hasOwnProperty('name')) // true
console.log(person.hasOwnProperty('skin')) // because skin is in prototype

// ====== Object.create() ==========
const proto = {year: 2020}
const myYear = Object.create(proto)

console.log(myYear.year) // 2020
console.log(myYear.hasOwnProperty('year')) // false
console.log(myYear.__proto__ === proto) // true

proto.year = 2021
console.log(myYear.year) // 2021
