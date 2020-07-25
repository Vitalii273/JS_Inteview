let a = 42
let b = a
b++
console.log('a',a) //42
console.log('b',b) //43

//========================

let arr1 = [1,2,3]
let arr2 = arr1.concat() //клонирование массива arr1
let arr3 = arr1 // копирование ссылки на массив arr1

console.log('arr1',arr1) //[1,2,3]

arr2.push(4)
console.log('arr2',arr2) //[1,2,3,4]

arr3.push(4)
console.log('arr3',arr3) //[1,2,3]
console.log('arr1',arr1) //[1,2,3,4]

let arr4 = [1,2,3,4]
console.log(arr1 === arr3) //true
console.log(arr1 === arr4) //false





