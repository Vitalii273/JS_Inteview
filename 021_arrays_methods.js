const people = [
    {name: 'Anna', age: 10, budget: 3000},
    {name: 'Anna', age: 10, budget: 3000},
    {name: 'Igor', age: 20, budget: 40000},
    {name: 'John', age: 30, budget: 50000}
];

// For ES5
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}
// For of ES6
for (const person of people) {
    console.log(person)
}

//ForEach
people.forEach(function (person) {
    console.log(person)
})

people.forEach(person => console.log(person))

//Map
const newPeople = people.map(person => {
    // return person.name
    // return person.age * 3
    return `${person.name} (${person.age})`
})
console.log(newPeople)

//Filter
const adults = people.filter(person => person.age >= 18)
console.log(adults)

//Reduce
let amount = people.reduce((total, person) => total + person.budget, 0)
console.log(amount)

//Find
const igor = people.find(person => person.name === "Igor")
console.log(igor)

//FindIndex
const igorIndex = people.findIndex(person => person.name === "Igor")
console.log(igorIndex)

//===================
const newPeople1 = people
    .filter(person => person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })
    .reduce((total, person) => total + person.budget, 0)
console.log(newPeople1)
