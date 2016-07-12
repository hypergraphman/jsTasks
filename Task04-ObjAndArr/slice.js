/////////////       slice            //////////////////////
//Аналог метода slice
let slice = function () {
    let a     = [],
        // вводим начальное и конечное значения индексов при пустых аргументах
        begin = 0,
        end   = arguments[0].length;

    // если заданы индексы, то мы изменяем начальное и конечное значение среза массива
    if(arguments.length >= 2) {
        arguments[1] < 0 ? begin = end + arguments[1] : begin = arguments[1];
    }
    if(arguments.length === 3) {
        arguments[2] < 0 ? end += arguments[2] : end = arguments[2];
    }

    // копируем массив по заданным индексам
    for(let i = begin; i < end; i++) {
        a[a.length] = arguments[0][i];
    }

    return a;
};
///////////////////////////////////////////////////////////

module.exports = slice;

// console.log('--------first test--------');
// var fruits = ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго'];
// var citrus = fruits.slice(1,3);
// let myA = slice(fruits,1,3);
//
// console.log (citrus, myA);
//
// // когда в качестве элемента объект, то это ссылка!!!
// console.log('\n--------second test--------');
// // Используя slice, создаём newCar из myCar.
// var myHonda = { color: 'красный', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
// var myCar = [myHonda, 2, 'в хорошем состоянии', 'приобретена в 1997'];
// var newCar = myCar.slice(0, 2);
// let myA = slice(myCar, 0, 2)
//
// // Отображаем значения myCar, newCar и цвет myHonda
// //  по ссылкам из обеих массивов.
// console.log('newCar[0].color = ' + newCar[0].color);
// console.log('myA[0].color = ' + myA[0].color);
//
// // Изменяем цвет myHonda.
// myCar[0].color = 'багровый';
// console.log('Новый цвет моей Honda - ' + myHonda.color);
//
// // Отображаем цвет myHonda по ссылкам из обеих массивов.
// console.log('newCar[0].color = ' + newCar[0].color);
// console.log('myА[0].color = ' + myA[0].color);
