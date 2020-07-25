//контекст определяет как функция была вызвана и постоянно указывае на ключевое слово <this> в текущем участке кода в котором мы работаем

// call, bind, apply => функции для работы с контекстом

const person = {
    surname: 'Stark',
    knows: function (what, name) {
        console.log(`You know ${what}, ${name} ${this.surname}`)
    }
}

const john = {surname: 'Snow'}

person.knows('everything', 'Bran')
person.knows.call(john, 'nothing', 'John')
person.knows.call(john, ...['nothing', 'John'])
person.knows.apply(john, ['nothing', 'John'])
const bound = person.knows.bind(john, 'nothing', 'John') // bind => return new function
bound()

//================

function Person(name, age) {
    this.name = name
    this.age = age

    console.log(this)
}

const elena = new Person('Elena', 20)

//========== binding ==============
function logThis() {
    console.log(this)
}

const obj = {num: 42}
logThis.call(obj)
logThis.apply(obj)
logThis.bind(obj)()

//============== implicit(не явный) ==================
const animal = {
    legs: 4,
    logThis: function () {
        console.log(this)
    }
}

animal.logThis()

//=======================

function Cat(color) {
    this.color = color
    console.log('This', this);
    (() => console.log('Arrow this', this))()
}

new Cat('red')