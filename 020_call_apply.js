// ======================== call ======================

const catObj = {
    breed: 'persian',
    name: 'bubbles'
}

function speakCat() {
    console.log(`I am ${this.breed} cat my name is ${this.name}`)
}

speakCat(); //bread = undefined, name = undefined, because this is not defined

// to fix this error, we have to call the function speakCat with the catObj
speakCat.call(catObj);

//call() can accept more than one arguments
const dogObj = {
    breed: 'dog',
    name: 'bandit'
}

function speakDog(food) {
    console.log(`I am ${this.breed} dog my name is ${this.name}. I love eating ${food}`)
}

speakDog.call(dogObj, "salmon");

// ====================== apply =====================
// apply() is similar to call() but there are some differences...

const dogObj1 = {
    breed: 'york',
    name: 'marley'
}

function speakDog1(food, location) {
    console.log(`I am ${this.breed} dog my name is ${this.name}. I love eating ${food}! Now can we please go to play at the ${location}`)
}

speakDog1.apply(dogObj1, ['salmon', 'dog park']);

// ===========
const someFood = ['eggs', ' bread', 'milk']

function breakfast(a, b, c) {
    return `I would like ${a}, ${b}, ${c} for breakfast`
}

console.log(breakfast(...someFood))

// Here we using null because there is no object and only uor arguments as an array (someFood)
console.log(breakfast.apply(null, someFood))

// You can also use apply on built in JS functions
console.log.apply(null, someFood)

// And you can put a new arguments into your array with the spread operator
console.log.apply(null, ['yogurt', ...someFood])

