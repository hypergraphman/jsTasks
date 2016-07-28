// let thing = {
//     type  : undefined,
//     name  : undefined,
//     count : 0
// };

// функция которая ведет подсчет элементов, если элемент новый то тогда добавляет этот элемент в массив
let countByItemName = function (array, name, type) {
    let isCount = false;
    for (let item of array) {
        if (item.name === name && item.type === type) {
            item.count++;
            isCount = true;
        }
    }
    if (!isCount)
        array.push (new function () {
            this.type  = type;
            this.name  = name;
            this.count = 1;
        })
};

// функция которая сканирует некий кусок some поступивший из DOM
// и с помощью функции countByItemName подсчитывает и записывает кол-во элементов в массив statistics
let scan = function(statistics, some) {
    let nodes = some.childNodes;

    for (let node of nodes) {
        if (node.nodeType === 1) {
            countByItemName(statistics, node.tagName, node.nodeType);
            for (let attrClass of node.classList)
                // условно поставили что тип класса у нас будет равен 2
                // т.к. задача ученическая решил не заморачиваться и так оставил
                countByItemName(statistics, attrClass, 2)
            scan(statistics, node);
        }
        if (node.nodeType === 3) {
            countByItemName(statistics, 'Text', node.nodeType);
        }
    }
};

// функция которая выводит на консоль результат работы сканирования DOM
let printStatistics = function (statistics) {
    for (let item of statistics) {
        if (item.type === 1 ) {
            console.log(`Тэгов ${item.name}: ${item.count}\n`);
        }
        else if (item.type === 2 ) {
            console.log(`Элементов с классом ${item.name}: ${item.count}\n`);
        }
        else if (item.type === 3) {
            console.log(`Текстовых узлов: ${item.count}\n`);
        }
    }

};

let scanDOM = function (something) {
    // данные об элементах содержатся в этом массиве
    let statistics = [];

    scan(statistics, something);

    printStatistics(statistics);
};

module.exports = {
    scanDOM : scanDOM
};