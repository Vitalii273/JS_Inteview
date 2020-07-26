// ================= recursion ==================
// Два способа мышления
// В качестве первого примера напишем функцию pow(x, n), которая возводит x в натуральную степень n. Иначе говоря, умножает x на само себя n раз.

// pow(2, 2) = 4
// pow(2, 3) = 8
// pow(2, 4) = 16
// Рассмотрим два способа её реализации.

// Итеративный способ: цикл for:

function pow(x, n) {
    let result = 1;

    // умножаем result на x n раз в цикле
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(2, 3)); // 8
// Рекурсивный способ: упрощение задачи и вызов функцией самой себя:

function pow1(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow1(x, n - 1);
    }
}

console.log(pow1(2, 3)); // 8


// Рекурсивное решение задачи обычно короче, чем итеративное.
// Используя условный оператор ? вместо if, мы можем переписать pow(x, n), делая код функции более лаконичным, но всё ещё легко читаемым:

function pow2(x, n) {
    return (n === 1) ? x : (x * pow2(x, n - 1));
}

console.log(pow2(2, 3)); // 8

// ================ Рекурсивные обходы ============================
// Другим отличным применением рекурсии является рекурсивный обход.

// Представьте, у нас есть компания. Структура персонала может быть представлена как объект:

let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
    if (Array.isArray(department)) { // случай (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // случай (2)
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
        }
        return sum;
    }
}

console.log(sumSalaries(company)); // 6700

//====================== Связанный список ==================

// Пример:

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    console.log(list.value); // выводим текущий элемент

    if (list.next) {
        printList(list.next); // делаем то же самое для остальной части списка
    }

}

printList(list);

// Вывод односвязного списка в обратном порядке
function printListRevers(list){
    if(list.next){
        printListRevers(list.next)
    }
    console.log(list.value)
}

printListRevers(list)


// Альтернативный код для создания:
let list1 = {value: 1};
list1.next = {value: 2};
list1.next.next = {value: 3};
list1.next.next.next = {value: 4};

// Список можно легко разделить на несколько частей и впоследствии объединить обратно:

let secondList = list.next.next;
list.next.next = null;

// Для объединения:
list.next.next = secondList;

// И, конечно, мы можем вставить или удалить элементы из любого места.
// Например, для добавления нового элемента нам нужно обновить первый элемент списка:
let list2 = {value: 1};
list2.next = {value: 2};
list2.next.next = {value: 3};
list2.next.next.next = {value: 4};

// добавление нового элемента в список
list2 = {value: "new item", next: list2};

// Чтобы удалить элемент из середины списка, нужно изменить значение next предыдущего элемента:
list2.next = list.next.next;


