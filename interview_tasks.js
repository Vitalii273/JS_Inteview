// // https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions/blob/master/README.md
//
// // https://www.strictmode.io/articles/javascript-interview-exercises-with-solutions-2019/
// /**
//  * 1 task
//  */
// // alphabetical comparison (a < zzzz, aaaa < z)
// // case-insensitive comparison (air == AIR)
// // equality operators (==, >=, <=, !=) forbidden for whole strings
//
// function string_cmp(a, b) {
//     return a.toLowerCase().localeCompare(b.toLowerCase())
//
// //	return 0 if a == b
// //	return any negative number if a < b
// //	return any positive number if a > b
//
// }
// console.log('string_cmp',string_cmp('b', 'B'));
//
// /**
//  * 2 task simple sort using setTimeout
//  */
//
// let arr = [10, 2, 40, 4, 50, 1];
//
// arr.forEach(x => {
//     setTimeout(() => console.log(x), x)
// });
//
// const songs = ['song 1', 'song 2', 'song 3'];
//
// //const shuffledArr = ['song 2', 'song 3', 'song 1']
//
//
// // 2 0 2 ,  0 1 2
//
const shuffle = (array) => {
    let tmp;
    for (let i = 0; i < array.length; i++) {
        const randomIndex = Math.floor(Math.random() * array.length);
        tmp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = tmp;
    }
    return array
}
//
// console.log(shuffle(songs))
//
// const shuffle1 = (array) => {
//     const indexes = new Set()
//     const newArray = []
//     while (newArray.length < array.length) {
//         const randomIndex = Math.floor(Math.random() * array.length);
//         if (indexes.has(randomIndex)) {
//             continue
//         }
//         newArray.push(array[randomIndex])
//         indexes.add(randomIndex)
//
//     }
//     return newArray;
// }
//
// console.log(shuffle1(songs))
//
//
//
function memo(){
    const state ={};
    return (a1, a2) =>{
        const key = `${a1}:${a2}`;
        if(!state[key]){
            state[key] = a1 + a2;
        }
        return  state[key];
    }
}
//
//
//
// const calc = memo();
// const foo = calc(1,2)
// console.log(foo)

function solution(N, S) {
    // Implement your solution here
    let seatAllocated = N * 2;
    if (S.includes(" ")) {
        let splitSeatReservation = S.split(" ");
        console.log(splitSeatReservation)
        if (splitSeatReservation != null) {
            for (let i = 0; i < splitSeatReservation.length; i++) {
                let seatReservation = splitSeatReservation[i];
                let col = seatReservation.charAt(1);
                console.log(seatReservation)
                if ((col === 'A' || col === 'B' || col === 'C')
                    ||  (col === 'E' || col === 'F')
                    || (col === 'H' || col === 'J' || col === 'K'))
                    seatAllocated -= 1;
            }
        }
    }
    console.log(seatAllocated)
    return seatAllocated;
}

console.log(solution(2, '1A, 2F, 1C'))
