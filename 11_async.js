const first = () => console.log('First')
const second = () => console.log('Second')
const third = () => console.log('Third')

first()
second()
third()
console.log('------------------')
first() //Call Stack

setTimeout(second, 0) // event que (call back que, event loop) ==> call stack

third() //Call Stack
