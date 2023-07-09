// Hello!! Fast interview with developer: implement a tiny simple basic working solution (5-10 lines).
// This question does not include any 'tricks' and 'traps' - so if it looks simple, and you can provide a trivial answer, then that answer is probably the right one.

const add = (n) => (n + 10);
console.log('Simple call', add(3));
// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = (fn) => {
    let cache = {};
    return (args) => {
        console.log(args, 'arguments')
        let n = args;  // just taking one argument here
        if (n in cache) {
            console.log('Fetching from cache');
            return cache[n];
        }
        else {
            console.log('Calculating result');
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}
// creating a memoized function for the 'add' pure function
const memoizedAdd = memoize(add);
console.log(memoizedAdd(3));  // calculated
console.log(memoizedAdd(3));  // cached
console.log(memoizedAdd(4));  // calculated
console.log(memoizedAdd(4));  // cached

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

// ========================================
function byteLength(str) {
    // returns the byte length of an utf8 string
    var s = str.length;
    for (var i=str.length-1; i>=0; i--) {
        var code = str.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff) s++;
        else if (code > 0x7ff && code <= 0xffff) s+=2;
        if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
    }
    return s;
}

let phrase = 'hello  '

console.log(byteLength(phrase))

function chunk(s, maxBytes) {
    let buf = Buffer.from(s);
    const result = [];
    while (buf.length) {
        let i = buf.lastIndexOf(32, maxBytes+1);
        // If no space found, try forward search
        if (i < 0) i = buf.indexOf(32, maxBytes);
        // If there's no space at all, take the whole string
        if (i < 0) i = buf.length;
        // This is a safe cut-off point; never half-way a multi-byte
        result.push(buf.slice(0, i).toString());
        buf = buf.slice(i+1); // Skip space (if any)
    }
    return result;
}

console.log(chunk("Hey there! € 100 to pay", 5000));
// -> [ 'Hey there!', '€ 100 to', 'pay' ]

function byteLength1(str) {
    let s = str.length;
    for (var i=str.length-1; i>=0; i--) {
        var code = str.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff) s++;
        if (code > 0x7ff && code <= 0xffff) s+=2;
        if (code > 0xffff && code < 0x10000) s+=3;
        if (code >= 0x10000 && code <= 0x10FFFF) s+=4;
    }
    return s;
}

let phrase1 = 'Hey there! € 100 to pay'

console.log(byteLength1(phrase1), Buffer.from(phrase1,"utf-8").byteLength)

const arr = ['banana', 'banana', 'banana', 'yogurt', 'cocoa', 'cocoa']

console.log(Object.entries(
    arr.reduce((counter, str) => ({
        ...counter,
        [str]: (counter[str] ?? 0) + 1,
    }), {})
).sort((x, y) => y[1] - x[1]).map(x => x[0]))
