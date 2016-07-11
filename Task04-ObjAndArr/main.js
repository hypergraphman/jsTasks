let forEach = require('./forEarch.js');
let filter = require('./filter.js');
let map = require('./map.js');
let slice = require('./map.js');

// остановился на slice, особенность того что когда в качестве элемента объект, то
// это ссылка!!!


// Используюя slice, создаём newCar из myCar.
var myHonda = { color: 'красный', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
var myCar = [myHonda, 2, 'в хорошем состоянии', 'приобретена в 1997'];
var newCar = myCar.slice(0, 2);

// Отображаем значения myCar, newCar и цвет myHonda
//  по ссылкам из обеих массивов.
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);

// Изменяем цвет myHonda.
myCar[0].color = 'багровый';
console.log('Новый цвет моей Honda - ' + myHonda.color);

// Отображаем цвет myHonda по ссылкам из обеих массивов.
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);