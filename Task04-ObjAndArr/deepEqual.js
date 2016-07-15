/////////////       deepEqual        //////////////////////
//Глубокое сравнение объектов deepEqual
let deepEqual = function (thing1, thing2) {
    //если две переменные имеют одну ссылку, то это один и тот же объект, дальше можно уже не сравнивать
    // if (thing1 instanceof Object && thing2 instanceof Object && (thing1 === thing2))
    //     return true;

    try {
        // Если объекты имеют разное кол-во свойств, то они точно не равны
        if (Object.keys(thing1).length !== Object.keys(thing2).length)
            return false;
    }
    catch (e) {
        console.log('В свойствах объектах есть значения null или undefined, будьте столь любезны истправить это');
        return false;
    }

    // Если оба объекта дата, возвращаем булево значение их сравнения
    if (thing1 instanceof Date && thing2 instanceof Date) {
        return thing1.valueOf() === thing2.valueOf();
    }

    // Проверяет содержится ли в одном и том же свойстве разных объектов Нечисловой тип
    if (Number.isNaN(thing1) && Number.isNaN(thing2))
        if (thing1 !== thing2) return true;

    // Если объект "примитив", то возвращаем булево значение их сравнения
    if (typeof thing1 === 'number' || typeof thing1 === 'string' || typeof thing1 === 'boolean')
        return thing1 === thing2;

    // рекурсивно сравниваем все свойства объекта
    for (let prop in thing2) {
        if (thing1.hasOwnProperty(prop)) {
            if (!deepEqual(thing1[prop], thing2[prop]))
                return false;
        }
        else return false;
    }

    // если за не удалось обнаружить несоответсвия свойств объектов, то они равны
    return true;
};
///////////////////////////////////////////////////////////

module.exports = deepEqual;

//
// var objA = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3',
//     prop7: [1,2],
//     prop4: {
//         subProp1: 'sub value1',
//         subProp2: {
//             subSubProp1: 'sub sub value1',
//             subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
//         }
//     },
//     prop5: 1000,
//     prop6: new Date(2016, 2, 10),
//     prop8: false,
//     prop9: NaN
// };
//
// var objB = {
//     prop5: 1000,
//     prop3: 'value3',
//     prop1: 'value1',
//     prop2: 'value2',
//     prop7: [1,2],
//     prop6: new Date('2016/03/10'),
//     prop4: {
//         subProp2: {
//             subSubProp1: 'sub sub value1',
//             subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
//         },
//         subProp1: 'sub value1'
//     },
//     prop8: false,
//     prop9: NaN
// };
//
// console.log(deepEqual(objA, objB));