/////////////       reduce           //////////////////////
//Аналог метода reduce
let reduce = function () {
    // Если третьего аргумента нет, то мы присваиваем первое значение массива, иначе третий аргумент
    let val = arguments[0][0],
        i = 1;

    if (arguments.length >= 3) {
        val = arguments[2];
        i = 0;
    }

    try {
        // если массив пуст и начальное значение не задано
        if (arguments[0].length < i)
            throw new TypeError('Reduce of empty array with no initial value', 'reduce.js');
    } catch (e) {
        // здесь я хотел так же как в консоли красиво выводить в каком месте произошла ошибка,
        // стек вызовов и прекращение выполнения скрипта, но не смог найти инфу,
        // а дальше терять время не хотел на это
         console.log(e.stack);
    }

    for (; i < arguments[0].length; i++)
        val = arguments[1](val, arguments[0][i], i, arguments[0]);

    return val;
};
///////////////////////////////////////////////////////////

module.exports = reduce;

// console.log([].reduce(function(previousValue, currentValue, index, array) {
//     return previousValue + currentValue;
// }));

// console.log(reduce([], function(previousValue, currentValue, index, array) {
//     return previousValue + currentValue;
// }));

// console.log(reduce([0, 1, 2, 3, 4], function(previousValue, currentValue, index, array) {
//     return previousValue + currentValue;
// }, 10));

// var flattened = reduce([[0, 1], [2, 3], [4, 5]], function(a, b) {
//     return a.concat(b);
// });

// var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
//     return a.concat(b);
// });

// console.log(flattened);