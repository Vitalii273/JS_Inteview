console.log(sum(1, 41))

function sum(a, b) {
    return a + b;
}

// console.log(sum(1,41))
//=======================
var i
console.log(i) //undefined
i = 42
console.log(i)

j = 45
console.log(j)
var j

//=======================
// переменные let и const не подвержены хоистингу

// console.log(num) //ReferenceError
// const num = 42
// console.log(num)

// console.log(num) //ReferenceError
// let num = 42
// console.log(num)

//======================
/**
 * Function Expression & Function Declaration
 */

// console.log(square(25))

// function square(num) { //function Declaration
//     return num **2
// }

var square = function square(num) { //Function Expression можно использовать только после того ка она определена
    return num ** 2
}
console.log(square(25))
