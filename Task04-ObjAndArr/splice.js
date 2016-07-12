/////////////       splice           //////////////////////
//Аналог метода splice
let splice = function () {
    let removed  = [],
        newArray = [],
    // вводим начальное значение индекса места куда вставляем
        start    = arguments[1] < 0 ? arguments[0].length + arguments[1] : arguments[1],
        delCount = arguments[2],
        i = 0;

    for(; i < start; i++){
        newArray[i] = arguments[0][i];
    }
    for(let j = 3; j < arguments.length; j++)
        newArray[newArray.length] = arguments[j];


    for(; delCount > 0 && i < arguments[0].length; delCount--, i++){
        removed[removed.length] = arguments[0][i];
    }

    for(; i < arguments[0].length; i++){
        newArray[newArray.length] = arguments[0][i];
    }

    arguments[0] = newArray;
    return removed;
};
///////////////////////////////////////////////////////////

module.exports = splice;

var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];

// удаляет 0 элементов с индекса 2 и вставляет элемент 'барабанщик'
var removed = splice(myFish, 2, 0, 'барабанщик');
// myFish равен ['ангел', 'клоун', 'барабанщик', 'мандарин', 'хирург']
// removed равен [], никакие элементы не были удалены
console.log(myFish);
console.log(removed);

// удаляет 1 элемент с индекса 3
removed = myFish.splice(3, 1);
// myFish равен ['ангел', 'клоун', 'барабанщик', 'хирург']
// removed равен ['мандарин']

// удаляет 1 элемент с индекса 2 и вставляет элемент 'телескоп'
removed = myFish.splice(2, 1, 'телескоп');
// myFish равен ['ангел', 'клоун', 'телескоп', 'хирург']
// removed равен ['барабанщик']

// удаляет 2 элемента с индекса 0 и вставляет элементы 'попугай', 'анемон' и 'голубая'
removed = myFish.splice(0, 2, 'попугай', 'анемон', 'голубая');
// myFish равен ['попугай', 'анемон', 'голубая', 'телескоп', 'хирург']
// removed равен ['ангел', 'клоун']

// удаляет 2 элемента с индекса 3
removed = myFish.splice(3, Number.MAX_VALUE);
// myFish равен ['попугай', 'анемон', 'голубая']
// removed равен ['телескоп', 'хирург']