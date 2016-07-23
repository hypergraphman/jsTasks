// let thing = {
//     type  : undefined,
//     name  : undefined,
//     count : 0
// };

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

let statistics = [];

let scanDOM = function (something) {
    let nodes = something.childNodes;

    for (let node of nodes) {
        if (node.nodeType === 1) {
            countByItemName(statistics, node.tagName, node.nodeType);
            for (let attrClass of node.classList)
                // условно поставили что тип класса у нас будет равен 2
                // т.к. задача ученическая решил не заморачиваться и так оставил
                countByItemName(statistics, attrClass, 2)
            scanDOM(node);
        }
        if (node.nodeType === 3) {
            countByItemName(statistics, 'Text', node.nodeType);
        }
    }

    return statistics;
};

module.exports = {
    scanDOM : scanDOM
};