/**
 * ============== Bind ===================
 */
// How to create custom bind?
function bind(context, fn) {
    return function (...args) {
        fn.apply(context, ...args)
    }
}

const testBind = {first: 'test', second: 'bind'}

function logTest() {
    console.log(`${this.first} ${this.second}`)
}

bind(testBind, logTest)()
// ======================================
const user = {
    data: [
        {name: "T. John", age: 37},
        {name: "P. Alex", age: 43}
    ],
    showData: function (event) {
        let randomNum = ((Math.random() * 2 | 0) + 1) - 1; // Любое число с 0 до 1
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }
}
user.showData();

//  Тут у нас объект с данными о машинах, у которого нет метода для вывода своих данных в консоль
const cars = {
    data: [
        {name: "Honda Accord", age: 14},
        {name: "Tesla Model S", age: 2}
    ]
}

// С помощью bind() мы можем заимствовать методы
//  Мы можем взять метод showData() из объекта user, который мы сделали в предыдущем примере
//  Ниже мы свяжем метод user.showData с объектом cars
cars.showData = user.showData.bind(cars);
cars.showData(); // Honda Accord 14


//============ С помощью bind() мы можем каррировать функцию (currying) ===========
// Каррирование функции, также известное, как частичное применение функции — это использование функции, которая возвращает новую функцию с уже частично выставленными аргументами. Эта функция имеет доступ к хранящимся аргументам и переменным внешней функции. В общем, это звучит куда сложнее, чем есть на самом деле.
// Давайте уже применим метод bind() и каррирование вместе. Для начала, у нас есть простенькая функция greet(), которая принимает 3 параметра:

function greet(gender, age, name) {
    // Если мужчина, то используем Mr., если нет то Ms..
    let salutation = gender === "male" ? "Mr. " : "Ms. ";
    if (age > 25) {
        return "Hello, " + salutation + name + ".";
    } else {
        return "Hey, " + name + ".";
    }
}

// И мы используем bind() метод, чтобы каррировать нашу функцию greet(). Как мы говорили ранее, первый аргумент метода bind() будет иметь значение this.
// В общем, мы передаем null, так как мы не используем this в функции
let greetAnAdultMale = greet.bind(null, "male", 45);
console.log(greetAnAdultMale("John Doe")); // "Hello, Mr. John Doe."
greetAnAdultMale = greet.bind(null, "", 45)
console.log(greetAnAdultMale("Elena Wood")); // "Hello, Ms. Elena Wood."

let greetAYoungster = greet.bind(null, "", 16);
console.log(greetAYoungster("Alex")); // "Hey, Alex."
console.log(greetAYoungster("Emma Waterloo")); // "Hey, Emma Waterloo."

// Используя метод bind() для каррировния, все наши параметры greet(), кроме последнего аргумента, подставляются автоматически. Таким образом этот аргумент, который мы меняем, используется при вызове новых функций, каррированных с greet().
// В общем, с помощью метода bind(), мы можем выставлять значение для вызова методов на объекте, заимствовать и копировать методы, а также назначать методы переменным, которые выполнятся как функции.

/**
 * =================== Call ===================
 */

// Вызов запустит функцию, установив this = user, вот так:

function showFullName() {
    console.log(this.firstName + " " + this.lastName);
}

let users = {
    firstName: "Василий",
    lastName: "Петров"
};

// функция вызовется с this=user
showFullName.call(users) // "Василий Петров"

// После контекста в call можно передать аргументы для функции. Вот пример с более сложным вариантом showFullName, который конструирует ответ из указанных свойств объекта:
users = {
    firstName: "Ivan",
    surname: "Ivanov",
    patronym: "Ivanovich"
};

function showFullName1(firstPart, lastPart) {
    console.log(this[firstPart] + " " + this[lastPart]);
}

// f.call(контекст, аргумент1, аргумент2, ...)
showFullName1.call(users, 'firstName', 'surname') // "Ivan Ivanov"
showFullName1.call(users, 'firstName', 'patronym') // "Ivan Ivanovich"

// coping method using call

function printArgs() {
    let join = [].join; // скопируем ссылку на функцию в переменную

    // вызовем join с this=arguments,
    let argStr = join.call(arguments, ':');
    console.log(argStr); // сработает и выведет 1:2:3
}

printArgs(1, 2, 3);

/**
 * ==================== Apply ========================
 */
// Вызов функции при помощи func.apply работает аналогично func.call, но принимает массив аргументов вместо списка.
// func.call(context, arg1, arg2);
// идентичен вызову func.apply(context, [arg1, arg2]);

// В частности, эти две строчки сработают одинаково:

showFullName1.call(users, 'firstName', 'surname');
showFullName1.apply(users, ['firstName', 'surname']);

// Преимущество apply перед call отчётливо видно, когда мы формируем массив аргументов динамически.Например, в JavaScript есть встроенная функция Math.max(a, b, c...), которая возвращает максимальное значение из аргументов:

console.log(Math.max(1, 5, 2)); // 5
// При помощи apply мы могли бы найти максимум в произвольном массиве, вот так:

let arr = [];
arr.push(1);
arr.push(5);
arr.push(2);

// получить максимум из элементов arr
console.log(Math.max.apply(null, arr)); // 5

//  В примере выше мы передали аргументы через массив – второй параметр apply… Но вы, наверное, заметили небольшую странность? В качестве контекста this был передан null.Строго говоря, полным эквивалентом вызову Math.max(1,2,3) был бы вызов Math.max.apply(Math, [1,2,3]). В обоих этих вызовах контекстом будет объект Math.
// Но в данном случае в качестве контекста можно передавать что угодно, поскольку в своей внутренней реализации метод Math.max не использует this. Действительно, зачем this, если нужно всего лишь выбрать максимальный из аргументов? Вот так, при помощи apply мы получили короткий и элегантный способ вычислить максимальное значение в массиве!

/**
 * ==================== This (this = context) =====================
 */
// Итак, мы знаем, что this – это текущий объект при вызове «через точку» и новый объект при конструировании через new.
// Значение this устанавливается в зависимости от того, как вызвана функция:

// При вызове функции как метода:
// obj.func(...)    // this = obj
// obj["func"](...)

// При обычном вызове:
// func(...) // this = window (ES3) /undefined (ES5)

// В new:
// new func() // this = {} (новый объект)

// Явное указание:
// func.apply(context, args) // this = context (явная передача)
// func.call(context, arg1, arg2, ...)

//===================== Practice =========================
// Есть функция sum, которая суммирует все элементы массива:
function sum(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    });
}

console.log(sum([1, 2, 3])); // 6 (=[1+2+3])

// Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:
function sumArgs() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function (a, b) {
        return a * b;
    });
}

// Область применения applyAll, конечно, шире, можно вызывать её и со своими функциями:
function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}

console.log(applyAll(sumArgs, 1, 2, 3)); // -> sum(1, 2, 3) = 6
console.log(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24

console.log(applyAll(Math.max, 2, -2, 3)); // 3
console.log(applyAll(Math.min, 2, -2, 3)); // -2

