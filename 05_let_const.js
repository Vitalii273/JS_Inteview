//Let
let a = 'Variable a'
let b = 'Variable b'

{ //block scope ES6
    a = 'New Variable A'
    let b = 'Local Variable b'
    console.log('Scope A', a)
    console.log('Scope B', b)
    // console.log('Scope C', c)
    // let c = 'Something'
}

console.log('Scope A', a)
console.log('Scope B', b)

//Const
//можно изменять только внутреннее состояние объекта
const PORT = 8080
// PORT = 2000 //TypeError: Assignment to constant variable.
const array = ['Javascript', 'is', 'Awesome']
array.push('!')
array[0] = 'JS'
console.log(array)
// array = '' //Error

const obj = {}
obj.name = 'Vitalii'
obj.age = 38

console.log(obj)

obj.age = 21
console.log(obj)

delete obj.name
console.log(obj)

