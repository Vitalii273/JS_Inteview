// null, undefined, boolean, number, string, object, symbol-ES6

console.log(typeof (0)); //number
console.log(typeof (true)); //boolean
console.log(typeof 'Javascript');//string "",'', ``-literal
console.log(typeof undefined); //undefined
console.log(typeof {}); //object
console.log(typeof Symbol('JS'));
console.log(typeof null); // === typeof null
console.log(typeof function () {
});
console.log(typeof NaN); // not a number === typeof number
console.log(typeof (1 / 0)); // number

//приведение типов

let language = 'Javascript';
if (language) {
    console.log('The best language is: ', language);
}

//false values '', 0, null, undefined, NaN, false
console.log(Boolean('')) //false
console.log(Boolean('Hello')) //true
console.log(Boolean(' ')) //true
console.log(Boolean('0')) //true
console.log(Boolean(0)) //false
console.log(Boolean([])) //true -> object
console.log(Boolean({})) //true -> object
console.log(Boolean(function () {})) //true -> object

//строки и числа
console.log(1 + '2'); //string 12
console.log('' + 1 + 0); // string 10
console.log('' - 1 + 0) // number
console.log('3' * '8') //number
console.log(4 + 10 + 'px') //string
console.log('px' + 5 + 10) //string
console.log('42' - 40) //number
console.log('42px' - 2) //NaN
console.log(null + 2) //number 2, null= 0
console.log(undefined + 42) //NaN

// == vs ===
//== сравнивает значение с приведением типа
//=== сравнивает по значению без приведения типов
// рекомендуется постоянно использовать ===

console.log(2 == '2') //true
console.log(2 === '2') // false
console.log(undefined == null) //true
console.log(undefined === null) //false
console.log('0' == false) //true false->0
console.log('0' == 0) //true
console.log(0 == 0) //true

//===========
console.log(false == '') //true
console.log(false == []) //true
console.log(false == {}) //false
console.log('' == 0) //true
console.log('' == []) //true
console.log('' == {}) //false
console.log(0 == []) //true
console.log(0 == {}) //false
console.log(0 == null) //false




