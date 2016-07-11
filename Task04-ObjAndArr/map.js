/////////////       map              //////////////////////
//Аналог метода map
let map = function () {
    let a=[];
    for (let i in arguments[0])
        a[i] = arguments[1](arguments[0][i], i, arguments[0]);
    return a;
};
///////////////////////////////////////////////////////////

module.exports = map;

// //тестовые массивы
// let a1 = [100, 200, 300, 400],
//     a2 = ['first', 'second', '3th', '4th'],
//     a3 = [12, '12th', 13, '14th'];
//
// // Примеры тестов
// // тестовая функция
// function doubles(value) {
//     return value * 2;
// }
//
// console.log('--------first test--------');
// console.log(map(a1, doubles));
// console.log(a1.map(doubles));
//
// console.log('\n--------second test--------');
// console.log(map(a2, item => item + ' test'));
// console.log(a2.map(item => item + ' test'));
//
// console.log('\n--------third test--------');
// console.log(map(a3, item => item + 10));
// console.log(a3.map(item => item + 10));