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

// function memo(f) {
//     const store = {};
//     const a = Array.prototype;
//     return  function() {
//         const key = JSON.stringify(a.reduce.call(a.sort.call(arguments), (x, y, i) => ({ ...x, [i]: y }), {}) );
//         return (key in store) ? store[key] : (store[key] = f(...arguments));
//     };
// }
//
// const sumM = memo(sum);
//
// function sum(a, b) {
//     console.log("!!!!");
//     return a + b;
// }
//
//
// console.log(sumM(5, 1));
// console.log(sumM(4, 1));

//========================================
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

console.log(chunk("Hey there! € 100 to pay", 12));
// -> [ 'Hey there!', '€ 100 to', 'pay' ]