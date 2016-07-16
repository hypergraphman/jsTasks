let slice = require('./slice.js');

/////////////       splice           //////////////////////
//Аналог метода splice
let splice = function () {
    let removed  = [],
        lastArray= [],
        insArray = [],
        // вводим начальное значение индекса места куда вставляем
        start    = arguments[1] < 0 ? arguments[0].length + arguments[1] : arguments[1],
        delCount = arguments[2];
    if (start < 0) start = 0;
    // массив который удаляется
    removed = slice(arguments[0], start, start+delCount);

    // массив который будем вставлять в середину
    insArray = slice (arguments, 3, arguments.length);

    // массив-хвост, который добавим после вставки insArray
    lastArray = slice(arguments[0], start+delCount, arguments[0].length);

    for (let i = 0; i < insArray.length; i++)
        arguments[0][i+start] = insArray[i];

    for (let i = 0; i < lastArray.length; i++)
        arguments[0][i+start+insArray.length] = lastArray[i];

    // если элементов стало меньше уменьшаем длину массива до нужной
    arguments[0].length = start+insArray.length+lastArray.length;

    return removed;
};
///////////////////////////////////////////////////////////

module.exports = splice;

var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];
var myFish2 = ['ангел', 'клоун', 'мандарин', 'хирург'];

// удаляет 0 элементов с индекса 2 и вставляет элемент 'барабанщик'
//  var removed = splice(myFish, -100, 0, 'барабанщик');
// removed = myFish2.splice(-100, 0, 'барабанщик');
// // myFish равен ['ангел', 'клоун', 'барабанщик', 'мандарин', 'хирург']
// // removed равен [], никакие элементы не были удалены
//
// console.log(myFish);
// console.log(removed);
// //
// // удаляет 1 элемент с индекса 3
// removed = splice(myFish, 3, 1);
// // myFish равен ['ангел', 'клоун', 'барабанщик', 'хирург']
// // removed равен ['мандарин']
//
// console.log(myFish);
// console.log(removed);
//
// // удаляет 1 элемент с индекса 2 и вставляет элемент 'телескоп'
// removed = splice(myFish, 2, 1, 'телескоп');
// // myFish равен ['ангел', 'клоун', 'телескоп', 'хирург']
// // removed равен ['барабанщик']
//
// console.log(myFish);
// console.log(removed);
//
// // удаляет 2 элемента с индекса 0 и вставляет элементы 'попугай', 'анемон' и 'голубая'
// removed = splice(myFish, 0, 2, 'попугай', 'анемон', 'голубая');
// // myFish равен ['попугай', 'анемон', 'голубая', 'телескоп', 'хирург']
// // removed равен ['ангел', 'клоун']
//
// console.log(myFish);
// console.log(removed);
//
// // удаляет 2 элемента с индекса 3
// removed = splice(myFish, 3, Number.MAX_VALUE);
// // myFish равен ['попугай', 'анемон', 'голубая']
// // removed равен ['телескоп', 'хирург']
//
// console.log(myFish);
// console.log(removed);