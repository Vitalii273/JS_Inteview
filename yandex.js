// There are two number arrays
// Arrays are sorted beforehand, but can be repeated
// Develop a function returning elements, found in both arrays

const a = [1, 2, 4, 7, 11, 19];
const b = [2, 2, 7, 19, 28, 31];


function findEqualElements(arr1, arr2) {
    const repeated = {}
    const res = []
    for (let i = 0; i < arr1.length; i++) {

        if (repeated[arr1[i]]) {
            continue;
        }

        const temp1 = arr1.filter((v) => v === arr1[i])
        const temp2 = arr2.filter((v) => v === arr1[i])


        if (temp1.includes(arr1[i]) && temp2.includes(arr1[i])) {
            repeated[arr1[i]] = Math.min(temp1.length, temp2.length);
        }
    }

    Object.keys(repeated).forEach((key) => {
        const tmp = new Array(repeated[key]).fill(key)
        res.push(...tmp)
    })
    return res;
}

// Examples
// console.log(findEqualElements([1, 2, 2, 3, 4, 4, 4, 4], [2, 2, 2, 2, 4, 4, 4]));
console.log(findEqualElements([1, 2, 2, 3], [2, 2, 2, 2]));
// console.log(findEqualElements([1, 2, 3], [2]));
// console.log(findEqualElements(a, b));


// // fetch() returns Promise<string>
//
// function App() {
//     return <DataLoader fetch={fetch} />;
// }
//
// // Develop DataLoader component
//
//
// const DataLoader = ({fetch}) => {
//     const [data, setData] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//
//     useEffect(() => {
//         setIsLoading(true)
//         fetch().then((res) => {
//             setData(res)
//             setIsLoading(false)
//         }).catch((err) => {
//             console.error(err)
//             setIsLoading(false)
//         })
//     }, [fetch])
//
//
//     return (
//         <div>
//             {isLoading
//                 ? <div> Loading... </div>
//                 : <div> {data} </div>
//             }
//         </div>
//     )
//
// }
function palindrome(string) {
    const tmp = string.toLowerCase().split(' ').join('');
    return tmp.split('').reverse().join('') === string.toLowerCase().split(' ').join('');

}

console.log(palindrome('А роза упала на лапу Азора'))


function palindrome1(args) {
    const tmp = args.toString().toLowerCase().split(' ').join('');
    const length = tmp.length - 1;
    let flag = false;
    for (let i = 0; i < length; i++) {
        flag = tmp[i] === tmp[length - i];
    }
    return flag
}

// console.log(palindrome1(1212))


const checkIsBalanced = (expression) => {
    const stack = [];
    for (const symbol of expression) {
        if (symbol === '(' || symbol === '{' || symbol === '[') {
            stack.push(symbol);
        } else if (symbol === ')' || symbol === '}' || symbol === ']') {
            if (!stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

// console.log(checkIsBalanced('(())'))

/*
Дан массив ссылок: ['url1', 'url2', ...] и лимит одновременных запросов (limit)
Необходимо реализовать функцию, которая опросит урлы и вызовет callback c массивом ответов
['url1_answer', 'url2_answer', ...] так, чтобы в любой момент времени выполнялось не более limit
запросов (как только любой из них завершился, сразу же отправляется следующий)
Т.е. нужно реализовать шину с шириной равной limit.

Требования:
- Порядок в массиве ответов должен совпадать с порядком в массиве ссылок
Дополнительно:
- Функция должна обладать мемоизацией (один и тот же урл не опрашивать дважды)

Для опроса можно использовать fetch или $.get
Ошибки обрабатывать не нужно

*/
// declare function fetch(url: string): Promise<string>;



function parallelLimit(urls, limit, callback) {
    // code here
    const queue = [...urls]
    let tmpLimit = limit
    const data = {}


    while(tmpLimit > 0){
        const recursiveCall = () => {
            const url = queue.shift()
            data[url] = null;

            fetch(url).then((res) => {
                data[url] = res;
                if(queue.length === 0){
                    const answers = urls.filter((url) => data[url] !== null && data[url] !== undefined).map((url) => data[url])
                    return answers.length === urls.length && callback(answers)
                } else {
                    recursiveCall()
                }
            })
        };

        tmpLimit --;
    }

}
console.log('test');