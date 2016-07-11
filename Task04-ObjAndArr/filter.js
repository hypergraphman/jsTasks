/////////////       filter           //////////////////////
//Аналог метода filter
let filter = function () {
    let a=[],
        j = 0;
    for (let i in arguments[0])
        if (arguments[1](arguments[0][i], i, arguments[0])) {
            a[j++] = arguments[0][i];
        }
    return a;
};
///////////////////////////////////////////////////////////

module.exports = filter;

// //тестовые массивы
// let a1 = [100, 200, 300, 400],
//     a2 = ['first', 'second', '3th', '4th'],
//     a3 = [12, '12th', 13, '14th'];
//
// // Примеры тестов
// // тестовая функция
// function isBigEnough(value) {
//     return value >= 13;
// }
//
// console.log('--------first test--------');
// console.log(filter(a3, isBigEnough));
// console.log(a3.filter(isBigEnough));
//
// console.log('\n--------second test--------');
// console.log(filter(a1, item => item < 250));
// console.log(a1.filter(item => item < 250));
//
// console.log('\n--------third test--------');
// console.log(filter(a2, item => item < 'a'));
// console.log(a2.filter(item => item < 'a'));