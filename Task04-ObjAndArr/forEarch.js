/////////////       forEach          //////////////////////
//Аналог метода forEach
let forEach = function () {
    for (let i in arguments[0])
        arguments[1](arguments[0][i], i, arguments[0]);
};
///////////////////////////////////////////////////////////

module.exports = forEach;

//тестовые массивы
let a1 = [100, 200, 300, 400],
    a2 = ['first', 'second', '3th', '4th'],
    a3 = [12, '12th', 13, '14th'];

// Примеры тестов
// тестовая функция
function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}
//
// console.log('--------first test--------');
// forEach(a3, logArrayElements);
// // a3.forEach(logArrayElements);
//
// console.log('\n--------second test--------');
// forEach(a1, item => console.log(item*2));
// // a1.forEach(item => console.log(item*2));
//
// console.log('\n--------third test--------');
// forEach(a2, item => console.log(item));
// // a2.forEach(item => console.log(item));