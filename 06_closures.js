//Closures функция внутри функции, которая замыкает в себе значения из вышестоящего scope

function sayHelloTo(name) {
    const message = 'Hello ' + name

    return function () {
        console.log(message)
    }
}

const helloToElena = sayHelloTo('Elena')
const helloToIgor = sayHelloTo('Igor')
console.log(helloToElena)
helloToElena()
helloToIgor()

//=================== Practice =======================
//#1
function createFrameworkManager() {
    const fw = ['Angular', 'React']

    return {
        print: function () {
            console.log(fw.join(' '))
        },
        add: function (framework) {
            fw.push(framework)
        }
    }
}

const manager = createFrameworkManager()
console.log(manager)
manager.print()
manager.add('VueJS')
manager.print()

//#2
const fibonacci = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fibonacci.length; i++) { // return [i] = undefined because i-> out of the scope
    setTimeout(function () {
        console.log(`fibonacci[${i}] = ${fibonacci[i]}`)
    }, 1500)
}

for (var i = 0; i < fibonacci.length; i++) { // first solution closures function
    (function (j) {
        setTimeout(function () {
            console.log(`fibonacci[${j}] = ${fibonacci[j]}`)
        }, 1500)
    })(i)
}

for (let i = 0; i < fibonacci.length; i++) { // second solution change var on let(access just in scope)
    setTimeout(function () {
        console.log(`fibonacci[${i}] = ${fibonacci[i]}`)
    }, 1500)
}


