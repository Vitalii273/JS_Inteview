// https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions/blob/master/README.md

// https://www.strictmode.io/articles/javascript-interview-exercises-with-solutions-2019/
/**
 * 1 task
 */
// / alphabetical comparison (a < zzzz, aaaa < z)
// case-insensitive comparison (air == AIR)
// equality operators (==, >=, <=, !=) forbidden for whole strings

function string_cmp(a, b) {
return a.localeCompare(b)

//	return 0 if a == b
//	return any negative number if a < b
//	return any positive number if a > b

}

console.log(string_cmp('b','a'))