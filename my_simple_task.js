// Hello!! Fast interview with developer: implement a tiny simple basic working solution (5-10 lines).
// This question does not include any 'tricks' and 'traps' - so if it looks simple, and you can provide a trivial answer, then that answer is probably the right one.


// function memo(f) {
//     const store = {};
//     return function () {
//         const key = JSON.stringify(
//             [].reduce.call([].sort.call(arguments), (x, y, i) => ({ ...x, [i]: y }), {})
//         );
//         if (key in store) {
//             return store[key];
//         }
//         const tmp = f(...arguments);
//         store[key] = tmp;
//         return tmp;
//     };
// }

function memo(f) {
    const store = {};
    const a = Array.prototype;
    return  function() {
        const key = JSON.stringify(a.reduce.call(a.sort.call(arguments), (x, y, i) => ({ ...x, [i]: y }), {}) );
        return (key in store) ? store[key] : (store[key] = f(...arguments));
    };
}

const sumM = memo(sum);

function sum(a, b) {
    console.log("!!!!");
    return a + b;
}


console.log(sumM(5, 1));
console.log(sumM(4, 1));