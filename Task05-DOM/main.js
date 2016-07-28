(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let deleteAllTextNodes = function (elem) {
    let countDel = 0;
    let childNodes = elem.childNodes;
    for (let indexNode = 0; indexNode < childNodes.length; indexNode++) {
        if (childNodes[indexNode].nodeType === 1) {
            countDel += deleteAllTextNodes(childNodes[indexNode]);
        }

        // Здесь надо быть осторожным с индексом indexNode т.к. при условии что текстовый узел первый
        // индекс будет нулевым, поэтому это условие должно оставаться всегда последним либо
        // переделать надо будет работу с индексами
        if (childNodes[indexNode].nodeType === 3) {
            elem.removeChild(childNodes[indexNode--]);
            countDel++;
        }
    }
    // console.log('удалено ' + countDel + ' элементов');
    return countDel;
};

module.exports = {
    deleteAllTextNodes : deleteAllTextNodes
};

},{}],2:[function(require,module,exports){
let deleteTextNodes = function (elem) {
    let countDel = 0;

    // при этом исполнении если идут два текстовых узла подряд работать не будет
    // т.к. при удалении текстового узла происходит как бы перескок на следующий узел
    // for (let node of elem.childNodes) {
    //     if (node.nodeType === 3) {
    //         elem.removeChild(node);
    //         i++;
    //     }
    // }


    // так не перескакивает и удаляет все текстовые узлы
    let childNodes = elem.childNodes;
    for (let indexNode = 0; indexNode < childNodes.length; indexNode++) {
        if (childNodes[indexNode].nodeType === 3) {
            elem.removeChild(childNodes[indexNode--]);
            countDel++;
        }
    }
    console.log('удалено ' + countDel + ' элементов');
};

module.exports = {
    deleteTextNodes : deleteTextNodes
};
},{}],3:[function(require,module,exports){
let prepend = require('./prepend');

let doc = document;
let container = doc.querySelector('.i3');
let newElement = doc.querySelector('.i2');

// console.log(container);
// console.log(newElement);

prepend.prepend(container, newElement);


let deleteTextNodes = require('./deleteTextNodes');

// deleteTextNodes.deleteTextNodes(doc.querySelector('body'));


let deleteAllTextNodes = require('./deleteAllTextNodes');

// let countDel = deleteAllTextNodes.deleteAllTextNodes(doc.querySelector('body'));
//
// console.log('удалено ' + countDel + ' элементов');

let scanDOM = require('./scanDOM');

scanDOM.scanDOM(doc);


},{"./deleteAllTextNodes":1,"./deleteTextNodes":2,"./prepend":4,"./scanDOM":5}],4:[function(require,module,exports){
let prepend = function (container, newElement) {
    container.insertBefore(newElement, container.firstChild);
    // так текстовый узел будет первым
    // container.insertBefore(newElement, container.firstElementChild);
};

module.exports = {
    prepend : prepend
};
},{}],5:[function(require,module,exports){
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
},{}]},{},[3]);
